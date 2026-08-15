export const dynamic = "force-dynamic";

const KOMAREV_URL =
  "https://komarev.com/ghpvc/?username=3ni8ma&style=flat-square&color=00F5D4&label=PROFILE+VIEWS&base=145281";

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  let count = "?";
  try {
    const res = await fetch(KOMAREV_URL, { cache: "no-store" });
    const svg = await res.text();
    const match = svg.match(/>([\d.,]+)<\/text>/);
    if (match) count = match[1];
  } catch {}

  const text = `PROFILE VIEWS ${count}`;
  const width = Math.ceil(text.length * 6.2) + 28;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="28" role="img" aria-label="${escapeXml(text)}"><title>${escapeXml(text)}</title><g shape-rendering="crispEdges"><rect width="${width}" height="28" rx="4" fill="#00F5D4"/></g><g fill="#FF0055" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100" font-weight="bold"><text transform="scale(.1)" x="${width * 5}" y="175">${escapeXml(text)}</text></g></svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
