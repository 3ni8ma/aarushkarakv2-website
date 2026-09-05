interface BackgroundEffectProps {
  effect:
    | "fluid-smoke"
    | "fluted-glass"
    | "liquid-metal"
    | "noise-shimmer"
    | "aurora-flow"
    | "mesh-gradient";
}

const gradients: Record<string, string> = {
  "fluid-smoke":
    "radial-gradient(60% 50% at 20% 20%, rgba(0,242,254,0.14), transparent 60%), radial-gradient(50% 45% at 80% 75%, rgba(230,0,73,0.12), transparent 60%), #0d1117",
  "fluted-glass":
    "radial-gradient(50% 60% at 50% 0%, rgba(0,242,254,0.10), transparent 60%), #0d1117",
  "liquid-metal":
    "radial-gradient(70% 60% at 70% 30%, rgba(230,0,73,0.14), transparent 60%), radial-gradient(60% 50% at 30% 70%, rgba(0,242,254,0.12), transparent 60%), #0d1117",
  "noise-shimmer":
    "radial-gradient(50% 50% at 30% 30%, rgba(214,121,100,0.10), transparent 60%), radial-gradient(50% 50% at 70% 70%, rgba(0,242,254,0.10), transparent 60%), #0d1117",
  "aurora-flow":
    "linear-gradient(180deg, rgba(0,242,254,0.08), transparent 40%), radial-gradient(60% 50% at 80% 20%, rgba(230,0,73,0.10), transparent 60%), #0d1117",
  "mesh-gradient":
    "radial-gradient(55% 45% at 15% 15%, rgba(230,0,73,0.16), transparent 60%), radial-gradient(55% 50% at 85% 80%, rgba(0,242,254,0.14), transparent 60%), radial-gradient(40% 40% at 70% 20%, rgba(214,121,100,0.08), transparent 60%), #0d1117",
};

/**
 * Zero-dependency ambient background. Previously this emitted `data-aifx`
 * attributes consumed by an external CDN script; it now renders a pure-CSS
 * gradient so the site has no third-party runtime dependency.
 */
export default function BackgroundEffect({ effect }: BackgroundEffectProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
      style={{ background: gradients[effect] ?? gradients["mesh-gradient"] }}
    />
  );
}
