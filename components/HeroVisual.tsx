"use client";

import dynamic from "next/dynamic";

const GLTFModel = dynamic(() => import("@/components/GLTFModel"), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-full w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/15 via-transparent to-[#e60049]/15"
      role="img"
      aria-label="Loading 3D hero visual"
    >
      <span className="bg-gradient-to-r from-cyan to-[#e60049] bg-clip-text font-bold text-5xl text-transparent sm:text-6xl">
        AK
      </span>
    </div>
  ),
});

export default function HeroVisual() {
  return <GLTFModel />;
}
