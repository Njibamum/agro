import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  cookies().delete("admin_token");
  return NextResponse.redirect(new URL("/admin/login", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"));
}