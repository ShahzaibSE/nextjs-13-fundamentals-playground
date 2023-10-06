import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

const GET = async function (request: NextRequest) {
    try {
        const user = await JSON.parse(request.headers.get("user") as string);
        return NextResponse.json({
            status: true,
            resCode: 200,
            message: "User fetched successfully",
            data: user,
            isError: false
        })
    }catch(err){
        return NextResponse.json({
            status: false,
            resCode: 500,
            message: "Internal server error",
            isError: true,
          });
    }
}