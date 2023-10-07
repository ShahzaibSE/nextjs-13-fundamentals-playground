import {
  NextRequest,
  NextResponse,
} from "next/server";

interface IParams {
  params: { name: string };
}

export const GET = async (
  request: NextRequest,
  { params }: IParams
) => {
  return NextResponse.json({
    From: params.name,
    Message: `Greetings from ${params.name === "" ? "Pakistan" : params.name}`,
    RequestType: "GET",
  });
};
