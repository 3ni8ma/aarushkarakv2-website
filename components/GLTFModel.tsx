"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import type { Group } from "three";

const MODEL_URL = "/model.gltf";

function Model() {
  const { scene } = useGLTF(MODEL_URL);
  const ref = useRef<Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    target.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useFrame(() => {
    if (!ref.current) return;
    mouse.current.x += (target.current.x - mouse.current.x) * 0.03;
    mouse.current.y += (target.current.y - mouse.current.y) * 0.03;
    ref.current.rotation.y = mouse.current.x * 0.06;
    ref.current.rotation.x = mouse.current.y * -0.04;
  });

  return (
    <group ref={ref}>
      <Center>
        <primitive object={scene} scale={1.8} />
      </Center>
    </group>
  );
}

function HeroFallback() {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/15 via-transparent to-[#e60049]/15"
      role="img"
      aria-label="Aarush Karak — 3D hero visual (fallback)"
    >
      <span className="bg-gradient-to-r from-cyan to-[#e60049] bg-clip-text font-bold text-5xl text-transparent sm:text-6xl">
        AK
      </span>
    </div>
  );
}

/**
 * Hero 3D visual with graceful degradation:
 * - HEAD-checks /model.gltf first (file is currently missing → fallback, no crash)
 * - dynamic import boundary lives in page.tsx (ssr:false)
 * - reduced-motion users get the static fallback
 */
export default function GLTFModel() {
  const [status, setStatus] = useState<"checking" | "ready" | "fallback">(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "fallback"
      : "checking",
  );

  useEffect(() => {
    if (status !== "checking") return;
    let cancelled = false;
    fetch(MODEL_URL, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setStatus(res.ok ? "ready" : "fallback");
      })
      .catch(() => {
        if (!cancelled) setStatus("fallback");
      });
    return () => {
      cancelled = true;
    };
  }, [status]);

  if (status !== "ready") return <HeroFallback />;

  return (
    <div className="h-full w-full" style={{ overflow: "visible" }}>
      <Canvas
        camera={{ position: [0, 5, 65], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent", overflow: "visible" }}
        aria-hidden="true"
      >
        <ambientLight intensity={1} />
        <directionalLight position={[50, 50, 50]} intensity={2} />
        <directionalLight position={[-50, -30, -50]} intensity={0.6} />
        <pointLight position={[0, 20, 30]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
