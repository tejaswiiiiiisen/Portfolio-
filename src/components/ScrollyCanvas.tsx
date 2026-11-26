"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

interface ScrollyCanvasProps {
  totalFrames?: number;
  framePathPrefix?: string;
}

export default function ScrollyCanvas({
  totalFrames = 102,
  framePathPrefix = "/sequence/frame_",
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastRenderedIndexRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isInitialReady, setIsInitialReady] = useState<boolean>(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);

  // Link scroll to container progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate target frame URL
  const getFrameUrl = useCallback(
    (index: number) => {
      const padded = String(index).padStart(3, "0");
      return `${framePathPrefix}${padded}.webp`;
    },
    [framePathPrefix]
  );

  // Draw frame with object-fit: cover math and dark background blend
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Find the requested image, or fallback to the closest loaded image
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame
      let closest: HTMLImageElement | null = null;
      let minDiff = Infinity;
      for (let i = 0; i < imagesRef.current.length; i++) {
        const candidate = imagesRef.current[i];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) {
          const diff = Math.abs(i - frameIndex);
          if (diff < minDiff) {
            minDiff = diff;
            closest = candidate;
          }
        }
      }
      img = closest as HTMLImageElement;
    }

    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    if (iw === 0 || ih === 0) return;

    const canvasRatio = cw / ch;
    const imgRatio = iw / ih;

    let dw = cw;
    let dh = ch;
    let dx = 0;
    let dy = 0;

    if (canvasRatio > imgRatio) {
      // Screen is wider than image
      dw = cw;
      dh = cw / imgRatio;
      dx = 0;
      dy = (ch - dh) / 2;
    } else {
      // Screen is taller than image
      dh = ch;
      dw = ch * imgRatio;
      dx = (cw - dw) / 2;
      dy = 0;
    }

    // Fill background with exact matching dark shade
    ctx.fillStyle = "#030303";
    ctx.fillRect(0, 0, cw, ch);

    // High quality smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(img, dx, dy, dw, dh);
    lastRenderedIndexRef.current = frameIndex;
  }, []);

  // Resize canvas for sharp Retina rendering
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (
      canvas.width !== Math.round(displayWidth * dpr) ||
      canvas.height !== Math.round(displayHeight * dpr)
    ) {
      canvas.width = Math.round(displayWidth * dpr);
      canvas.height = Math.round(displayHeight * dpr);
    }

    // Re-render current frame
    if (lastRenderedIndexRef.current >= 0) {
      renderFrame(lastRenderedIndexRef.current);
    }
  }, [renderFrame]);

  // Preload images progressively
  useEffect(() => {
    let isCancelled = false;
    const images: HTMLImageElement[] = new Array(totalFrames);
    imagesRef.current = images;

    let loaded = 0;

    // Load frame 0 first for instant hero display
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    images[0] = firstImg;

    firstImg.onload = () => {
      if (isCancelled) return;
      loaded++;
      setLoadedCount(loaded);
      setIsInitialReady(true);
      handleResize();
      renderFrame(0);

      // Now preload remaining frames sequentially & concurrently in chunks
      const loadRemaining = async () => {
        const batchSize = 6;
        for (let i = 1; i < totalFrames; i += batchSize) {
          if (isCancelled) break;
          const chunk = [];
          for (let j = i; j < Math.min(i + batchSize, totalFrames); j++) {
            chunk.push(
              new Promise<void>((resolve) => {
                const img = new Image();
                img.src = getFrameUrl(j);
                images[j] = img;
                img.onload = () => {
                  if (!isCancelled) {
                    loaded++;
                    setLoadedCount(loaded);
                  }
                  resolve();
                };
                img.onerror = () => {
                  resolve();
                };
              })
            );
          }
          await Promise.all(chunk);
        }
      };

      loadRemaining();
    };

    firstImg.onerror = () => {
      console.error("Failed to load initial frame at", getFrameUrl(0));
    };

    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();

    return () => {
      isCancelled = true;
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [getFrameUrl, handleResize, renderFrame, totalFrames]);

  // Scrub canvas frame on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rawIndex = Math.floor(latest * (totalFrames - 1));
    const clampedIndex = Math.max(0, Math.min(rawIndex, totalFrames - 1));

    if (clampedIndex !== lastRenderedIndexRef.current) {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        renderFrame(clampedIndex);
        setCurrentFrameIndex(clampedIndex);
      });
    }
  });

  const loadPercent = Math.min(100, Math.round((loadedCount / totalFrames) * 100));

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#030303]">
      {/* Sticky container that locks in viewport for the full 500vh scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden select-none">
        {/* Canvas layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 pointer-events-none"
          style={{ opacity: isInitialReady ? 1 : 0 }}
        />

        {/* Cinematic Vignette & Edge Blending Gradients to merge seamlessly with #030303 */}
        <div className="pointer-events-none absolute inset-0 bg-radial-vignette opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030303] via-[#030303]/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent" />

        {/* Parallax Overlay */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
