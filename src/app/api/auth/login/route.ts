import {
  NextRequest,
  NextResponse,
} from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";

export async function POST(
  request: NextRequest,
  response: NextResponse
) {
  try {
    const req = await request
      .json()
      .catch(() => null);
    //
    if (
      req.username == "admin" &&
      req.password == "admin"
    ) {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET
      );
      //
      const alg = "HS256";
      const jwt = await new jose.SignJWT({
        email: req.email,
      })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(secret);
      //
      cookies().set("token", jwt, {
        httpOnly: true,
      });
      //
      return NextResponse.json({
        status: true,
        resCode: 200,
        message: "Successfully logged in",
        isError: false,
      });
    }
  } catch (err) {
    return NextResponse.json({
      status: false,
      resCode: 500,
      message: "Internal server error",
      isError: true,
    });
  }
}
