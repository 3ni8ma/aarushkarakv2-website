export const dynamic = "force-dynamic";

const STORE_ID = "KPTdDsAOsL8cyV3B";
const PATHNAME = "views-badge/count.json";
const SEED = 145288;

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function readCount(): Promise<{ missing: boolean; value?: number }> {
  const res = await fetch(
    `https://${STORE_ID}.public.blob.vercel-storage.com/${PATHNAME}`,
    { cache: "no-store" },
  );
  if (res.status === 404) return { missing: true };
  if (!res.ok) throw new Error("blob read failed");
  const json = await res.json();
  return { missing: false, value: typeof json?.count === "number" ? json.count : undefined };
}

async function writeCount(count: number) {
  await fetch(`https://vercel.com/api/blob/?pathname=${PATHNAME}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
      "x-vercel-blob-store-id": STORE_ID,
      "x-api-version": "12",
      "x-vercel-blob-access": "public",
      "x-content-type": "application/json",
      "x-add-random-suffix": "0",
      "x-allow-overwrite": "1",
    },
    body: JSON.stringify({ count, updatedAt: new Date().toISOString() }),
  });
}

export async function GET() {
  let count: number;
  try {
    const result = await readCount();
    if (result.missing) {
      count = SEED;
      await writeCount(count);
    } else if (result.value === undefined) {
      count = SEED;
      await writeCount(count);
    } else {
      count = result.value + 1;
      await writeCount(count);
    }
  } catch {
    count = SEED;
  }

  const text = `PROFILE VIEWS ${count.toLocaleString("en-US")}`;
  const width = Math.ceil(text.length * 6.2) + 28;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="28" role="img" aria-label="${escapeXml(text)}"><title>${escapeXml(text)}</title><g shape-rendering="crispEdges"><rect width="${width}" height="28" rx="4" fill="#00F5D4"/></g><g fill="#FF0055" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100" font-weight="bold"><text transform="scale(.1)" x="${width * 5}" y="175">${escapeXml(text)}</text></g></svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
