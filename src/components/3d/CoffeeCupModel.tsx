"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SCROLL_CAMERA_KEYFRAMES } from "@/lib/constants";

interface CoffeeCupModelProps {
  scrollProgress: number;
}

export function CoffeeCupModel({ scrollProgress }: CoffeeCupModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const cupBodyRef = useRef<THREE.Mesh>(null);
  const steamRef = useRef<THREE.Points>(null);

  // Helper to interpolate keyframes
  const getCurrentTransform = (progress: number) => {
    const keyframes = SCROLL_CAMERA_KEYFRAMES;
    if (progress <= keyframes[0].progress) return keyframes[0];
    if (progress >= keyframes[keyframes.length - 1].progress)
      return keyframes[keyframes.length - 1];

    for (let i = 0; i < keyframes.length - 1; i++) {
      const k1 = keyframes[i];
      const k2 = keyframes[i + 1];
      if (progress >= k1.progress && progress <= k2.progress) {
        const factor = (progress - k1.progress) / (k2.progress - k1.progress);
        const easeFactor = THREE.MathUtils.smoothstep(factor, 0, 1);

        return {
          pos: [
            THREE.MathUtils.lerp(k1.pos[0], k2.pos[0], easeFactor),
            THREE.MathUtils.lerp(k1.pos[1], k2.pos[1], easeFactor),
            THREE.MathUtils.lerp(k1.pos[2], k2.pos[2], easeFactor),
          ] as [number, number, number],
          rot: [
            THREE.MathUtils.lerp(k1.rot[0], k2.rot[0], easeFactor),
            THREE.MathUtils.lerp(k1.rot[1], k2.rot[1], easeFactor),
            THREE.MathUtils.lerp(k1.rot[2], k2.rot[2], easeFactor),
          ] as [number, number, number],
          scale: THREE.MathUtils.lerp(k1.scale, k2.scale, easeFactor),
        };
      }
    }
    return keyframes[0];
  };

  // Steam particle positions
  const steamParticles = useMemo(() => {
    const count = 35;
    const pos = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.35;
      pos[i * 3 + 1] = Math.random() * 0.8 + 0.6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.35;
      scales[i] = Math.random() * 0.04 + 0.02;
    }
    return { pos, scales, count };
  }, []);

  // Frame update loop (60 FPS smooth lerp & steam physics)
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const targetTransform = getCurrentTransform(scrollProgress);

    // Smooth position lerp
    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      targetTransform.pos[0],
      6,
      delta
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetTransform.pos[1],
      6,
      delta
    );
    groupRef.current.position.z = THREE.MathUtils.damp(
      groupRef.current.position.z,
      targetTransform.pos[2],
      6,
      delta
    );

    // Subtle idle floating on Y axis
    const idleY = Math.sin(state.clock.elapsedTime * 1.5) * 0.04;
    groupRef.current.position.y += idleY * delta;

    // Smooth rotation lerp
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetTransform.rot[0],
      6,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetTransform.rot[1] + state.clock.elapsedTime * 0.08,
      6,
      delta
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      targetTransform.rot[2],
      6,
      delta
    );

    // Smooth scale lerp
    const targetScale = targetTransform.scale;
    groupRef.current.scale.x = THREE.MathUtils.damp(
      groupRef.current.scale.x,
      targetScale,
      6,
      delta
    );
    groupRef.current.scale.y = THREE.MathUtils.damp(
      groupRef.current.scale.y,
      targetScale,
      6,
      delta
    );
    groupRef.current.scale.z = THREE.MathUtils.damp(
      groupRef.current.scale.z,
      targetScale,
      6,
      delta
    );

    // Animate steam particles rising
    if (steamRef.current) {
      const positions = steamRef.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < steamParticles.count; i++) {
        positions[i * 3 + 1] += delta * 0.25;
        positions[i * 3] += Math.sin(state.clock.elapsedTime * 2 + i) * 0.001;
        if (positions[i * 3 + 1] > 1.6) {
          positions[i * 3 + 1] = 0.6;
        }
      }
      steamRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} position={[1.8, 0, 0]}>
      {/* --- MAIN CERAMIC CUP BODY --- */}
      <mesh ref={cupBodyRef} castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[0.65, 0.48, 1.0, 48, 1, false]} />
        <meshPhysicalMaterial
          color="#1C1816"
          roughness={0.28}
          metalness={0.12}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
        />
      </mesh>

      {/* --- GOLD RIMS & ACCENT STRIPE --- */}
      <mesh position={[0, 0.495, 0]} castShadow>
        <torusGeometry args={[0.648, 0.02, 16, 48]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.92}
          roughness={0.18}
        />
      </mesh>

      {/* --- GOLD EMBOSSED LOGO BAND --- */}
      <mesh position={[0, 0.1, 0.53]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.38, 0.12, 0.04]} />
        <meshStandardMaterial
          color="#E6C280"
          metalness={0.88}
          roughness={0.22}
        />
      </mesh>

      {/* --- INNER LIQUID (COFFEE SURFACE) --- */}
      <mesh position={[0, 0.42, 0]}>
        <cylinderGeometry args={[0.61, 0.61, 0.05, 36]} />
        <meshStandardMaterial
          color="#2A170E"
          roughness={0.15}
          metalness={0.1}
        />
      </mesh>

      {/* CREMA / FOAM RING */}
      <mesh position={[0, 0.435, 0]}>
        <ringGeometry args={[0.42, 0.60, 36]} />
        <meshStandardMaterial
          color="#8C5332"
          roughness={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* --- CUP HANDLE --- */}
      <mesh position={[0.68, 0.05, 0]} rotation={[0, 0, -0.3]}>
        <torusGeometry args={[0.26, 0.065, 16, 32, Math.PI * 1.2]} />
        <meshStandardMaterial
          color="#1C1816"
          roughness={0.28}
          metalness={0.12}
        />
      </mesh>

      {/* --- CERAMIC SAUCER / PLATE --- */}
      <mesh position={[0, -0.54, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.05, 0.75, 0.08, 48]} />
        <meshStandardMaterial
          color="#151210"
          roughness={0.3}
          metalness={0.15}
        />
      </mesh>

      <mesh position={[0, -0.50, 0]}>
        <torusGeometry args={[1.03, 0.015, 16, 48]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* --- STEAM VAPOR PARTICLES --- */}
      <points ref={steamRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[steamParticles.pos, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#EAE3D9"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
