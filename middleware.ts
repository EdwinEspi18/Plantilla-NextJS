import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
