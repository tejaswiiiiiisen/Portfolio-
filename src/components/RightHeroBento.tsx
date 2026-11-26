"use client";

import React from "react";
import ParticleSphere from "./ParticleSphere";

export default function RightHeroBento() {
  return (
    <div className="relative flex flex-col items-end z-20 pointer-events-none select-none w-[320px] sm:w-[400px] lg:w-[440px]">
      {/* Upper-Right 3D Spherical Wireframe Particle Network (Anchored in corner touching edge, half visible) */}
      <div className="absolute -top-20 -right-24 sm:-top-28 sm:-right-32 lg:-top-32 lg:-right-36 w-[450px] h-[450px] sm:w-[560px] sm:h-[560px] lg:w-[640px] lg:h-[640px] pointer-events-none z-0 overflow-visible opacity-95">
        <ParticleSphere className="w-full h-full" />
      </div>
    </div>
  );
}
