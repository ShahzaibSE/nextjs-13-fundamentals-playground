import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";


// This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
// //   return NextResponse.redirect(new URL('/about-2', request.url))
//     console.log(request.url);
//     return NextResponse.redirect(new URL('/profile', request.url))
// }

export async function middleware(
  request: NextRequest
) {
  try {
    const jwt = await request.cookies.get("token")
      ?.value;
    // Log token to check.
    console.log(
      `Getting Token from cookies: ${jwt}`
    );
    //
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET
    );
    //
    if (!jwt) {
      return NextResponse.redirect("/login");
    } else {
      const { payload, protectedHeader } =
        await jose.jwtVerify(jwt, secret);
      const headers = new Headers(
        request.headers
      );
      headers.set(
        "user",
        JSON.stringify(payload.email)
      );
      console.log(protectedHeader);
      console.log(payload);
      return NextResponse.next({
        request: {
          headers: headers,
        },
      });
    }
  } catch (err) {
    throw err;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/about/:path*", "/login/:path*"],
};
