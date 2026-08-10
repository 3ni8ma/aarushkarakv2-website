export default function LiquidGlassFilter() {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        pointerEvents: "none",
        zIndex: -1,
      }}
      aria-hidden="true"
    >
      <defs>
        <filter
          id="liquid-glass"
          colorInterpolationFilters="sRGB"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feImage
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            result="map"
            href="data:image/png;base64,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"
          />
          <feDisplacementMap in="SourceGraphic" in2="map" scale="-20" xChannelSelector="R" yChannelSelector="G" result="dispR" />
          <feColorMatrix in="dispR" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="red" />
          <feDisplacementMap in="SourceGraphic" in2="map" scale="-24" xChannelSelector="R" yChannelSelector="G" result="dispG" />
          <feColorMatrix in="dispG" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="green" />
          <feDisplacementMap in="SourceGraphic" in2="map" scale="-28" xChannelSelector="R" yChannelSelector="G" result="dispB" />
          <feColorMatrix in="dispB" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="blue" />
          <feBlend in="red" in2="green" mode="screen" result="rg" />
          <feBlend in="rg" in2="blue" mode="screen" result="output" />
          <feGaussianBlur in="output" stdDeviation="3" />
        </filter>
      </defs>
    </svg>
  );
}
