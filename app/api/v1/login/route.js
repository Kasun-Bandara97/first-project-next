import { NextResponse } from "next/server";
export const POST = async (req) => {
  const request = await req.json();
  console.log(request);
  return NextResponse.json({ success: true, userName: "kasun" });
};
