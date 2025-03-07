import { db } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();
    

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "name email and password required." },
        { status: 400 }
      );
    }

    const exitingUser = await db.collection("users").findOne({ email });

    if (exitingUser) {
      return NextResponse.json(
        { error: "User with this email already exist." },
        { status: 409 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });
    if (result && result.acknowledged) {
      return NextResponse.json({
        success: true,
        user: {
          userId: result.insertedId,
          name,
          email,
        },
      });
    } else {
      return NextResponse.json(
        { error: "User registration failed" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal servet error" },
      { status: 500 }
    );
  }
};
