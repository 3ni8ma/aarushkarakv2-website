interface BackgroundEffectProps {
  effect:
    | "fluid-smoke"
    | "fluted-glass"
    | "liquid-metal"
    | "noise-shimmer"
    | "aurora-flow"
    | "mesh-gradient";
}

const presets: Record<
  string,
  Record<string, string>
> = {
  "fluid-smoke": {
    "data-aifx": "fluid-smoke",
    "data-aifx-colors": "#00f2fe,#e60049,#00f2fe,#00f2fe",
    "data-aifx-bg": "#0d1117",
    "data-aifx-bg-alpha": "0.47",
    "data-aifx-speed": "0.64",
    "data-aifx-scale": "1.87",
    "data-aifx-warp": "1.53",
    "data-aifx-rise": "0.57",
    "data-aifx-swirl": "0.55",
    "data-aifx-contrast": "1",
    "data-aifx-softness": "0.78",
  },
  "fluted-glass": {
    "data-aifx": "fluted-glass",
    "data-aifx-colors": "#e60049,#00f2fe,#0d1117,#0d1117",
    "data-aifx-bg": "#0d1117",
    "data-aifx-speed": "0.79",
    "data-aifx-flutes": "39",
    "data-aifx-shape": "pattern",
    "data-aifx-profile": "contour",
    "data-aifx-distortion": "0.8",
    "data-aifx-highlight": "2",
    "data-aifx-blur": "2.5",
    "data-aifx-angle": "251",
    "data-aifx-grain": "0",
    "data-aifx-mouse": "1",
  },
  "liquid-metal": {
    "data-aifx": "liquid-metal",
    "data-aifx-colors": "#e60049,#e60049,#00f2fe,#00f2fe",
    "data-aifx-bg": "#0d1117",
    "data-aifx-speed": "1.78",
    "data-aifx-scale": "1.58",
    "data-aifx-contrast": "2.2",
    "data-aifx-flow-angle": "33",
    "data-aifx-relief": "2.05",
    "data-aifx-mouse": "0.5",
  },
  "noise-shimmer": {
    "data-aifx": "noise-shimmer",
    "data-aifx-colors": "#00f2fe,#e60049,#d67964",
    "data-aifx-bg": "#0d1117",
    "data-aifx-scale": "0.7",
    "data-aifx-shimmer": "1",
    "data-aifx-intensity": "0.69",
    "data-aifx-contrast": "2.5",
    "data-aifx-speed": "2",
  },
  "aurora-flow": {
    "data-aifx": "aurora-flow",
    "data-aifx-colors": "#00f2fe,#e60049,#d67964",
    "data-aifx-bg": "#0d1117",
  },
  "mesh-gradient": {
    "data-aifx": "mesh-gradient",
    "data-aifx-colors": "#e60049,#e60049,#00f2fe,#0d1117",
    "data-aifx-bg": "#0d1117",
    "data-aifx-speed": "1.04",
    "data-aifx-scale": "2.09",
    "data-aifx-warp": "1.5",
    "data-aifx-softness": "1",
    "data-aifx-contrast": "1.16",
    "data-aifx-grain": "0.2",
    "data-aifx-mouse": "1",
  },
};

export default function BackgroundEffect({ effect }: BackgroundEffectProps) {
  const attrs = presets[effect];

  if (!attrs) return null;

  return (
    <div
      {...attrs}
      className="fixed inset-0 -z-10 pointer-events-none will-change-transform"
      aria-hidden="true"
    />
  );
}
