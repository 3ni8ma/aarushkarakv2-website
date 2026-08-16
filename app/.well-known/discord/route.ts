export const dynamic = "force-static";

export function GET() {
  return new Response("dh=4254129523d9a434cd6a69129d93b4da08fe4a77", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
