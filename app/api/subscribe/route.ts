import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    const url = process.env.SUBSCRIBE_WEBHOOK_URL;
    const key = process.env.SUBSCRIBE_API_KEY;
    if (url) {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(key ? { "Authorization": `Bearer ${key}` } : {}) },
        body: JSON.stringify({ email }),
      });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 });
  }
}
