import { NextResponse } from "next/server";
import { TOKEN_METRICS } from "@/lib/token";

export const dynamic = "force-dynamic";

export async function GET() {
    return new NextResponse(TOKEN_METRICS.TOTAL_SUPPLY.toString(), {
        status: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
    });
}
