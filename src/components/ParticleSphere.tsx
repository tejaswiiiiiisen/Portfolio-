"use client";

import React, { useEffect, useRef } from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  pulseSpeed: number;
  phase: number;
}

export default function ParticleSphere({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 360);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 360);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate 3D sphere nodes (Fibonacci sphere distribution) - Expanded & Dense
    const nodeCount = 92;
    const sphereRadius = Math.min(width, height) * 0.44;
    const nodes: Node3D[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Color variation: 75% warm golden-orange, 25% subtle ice-blue
      const isIceBlue = Math.random() < 0.22;
      nodes.push({
        x: x * sphereRadius,
        y: y * sphereRadius,
        z: z * sphereRadius,
        baseRadius: isIceBlue ? 2.8 : 3.2 + Math.random() * 1.8,
        color: isIceBlue ? "#38bdf8" : "#ffa31a",
        glowColor: isIceBlue ? "rgba(56, 189, 248, 0.9)" : "rgba(255, 150, 20, 0.9)",
        pulseSpeed: 0.6 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let angleY = 0;
    let angleX = 0.2;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.006;
      angleY += 0.0018; // Ultra-slow, smooth cinematic rotation on Y
      angleX = 0.25 + Math.sin(time * 0.15) * 0.04; // Very subtle, gentle tilting

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const fov = 320;
      const cameraZ = 450;
      const centerX = width / 2;
      const centerY = height / 2;

      // Project each node to 2D
      const projected = nodes.map((n) => {
        // Rotate Y
        let x1 = n.x * cosY + n.z * sinY;
        let z1 = -n.x * sinY + n.z * cosY;
        // Rotate X
        let y2 = n.y * cosX - z1 * sinX;
        let z2 = n.y * sinX + z1 * cosX;

        const scale = fov / (cameraZ + z2);
        const pX = centerX + x1 * scale;
        const pY = centerY + y2 * scale;
        const depthAlpha = Math.max(0.15, Math.min(1, (z2 + sphereRadius) / (sphereRadius * 2)));

        return {
          ...n,
          pX,
          pY,
          scale,
          z2,
          depthAlpha,
          currentRadius: n.baseRadius * (0.8 + 0.3 * Math.sin(time * n.pulseSpeed + n.phase)),
        };
      });

      // Sort by Z for proper depth rendering
      projected.sort((a, b) => a.z2 - b.z2);

      // Draw connecting lines between nearby nodes
      ctx.lineWidth = 0.9;
      const maxConnectDist = sphereRadius * 0.65;

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dz = a.z - b.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < maxConnectDist) {
            const lineAlpha = (1 - dist3D / maxConnectDist) * Math.min(a.depthAlpha, b.depthAlpha) * 0.4;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 155, 30, ${lineAlpha})`;
            ctx.moveTo(a.pX, a.pY);
            ctx.lineTo(b.pX, b.pY);
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      for (const p of projected) {
        const radius = Math.max(1.2, p.currentRadius * p.scale);

        // Outer glow
        const glowRadius = radius * 4.2;
        const glowGrad = ctx.createRadialGradient(p.pX, p.pY, 0, p.pX, p.pY, glowRadius);
        glowGrad.addColorStop(0, p.glowColor);
        glowGrad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(p.pX, p.pY, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Solid core
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.pX, p.pY, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative pointer-events-none select-none overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
