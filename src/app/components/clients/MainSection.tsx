"use client";
import React from "react";
import { SparklesCore } from "../ui/Sparkles";

export function MainSection() {
  return (
    <div className="h-96 relative w-full bg-black flex flex-col items-center justify-center overflow-hidden pt-11">
      <div className="absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Clientes
      </h1>
    </div>
  );
}
