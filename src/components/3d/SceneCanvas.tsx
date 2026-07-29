"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import { CoffeeCupModel } from "./CoffeeCupModel";
import { Suspense, useState, useEffect } from "react";

interface SceneCanvasProps {
  scrollProgress: number;
}

export function SceneCanvas({ scrollProgress }: SceneCanvasProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.75} />
        {/* Studio Warm Key Light */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.8}
          color="#FFE8D6"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        {/* Warm Gold Rim Light */}
        <directionalLight
          position={[-6, 4, -4]}
          intensity={1.4}
          color="#E6C280"
        />
        {/* Fill Soft Blue-tint Light for High Contrast */}
        <directionalLight
          position={[0, -5, 4]}
          intensity={0.4}
          color="#A8C0D0"
        />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <CoffeeCupModel scrollProgress={scrollProgress} />
          </Float>

          <ContactShadows
            position={[0, -2.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
            color="#0A0806"
          />

          <Environment preset="city" environmentIntensity={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}
