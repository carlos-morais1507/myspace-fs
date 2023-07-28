import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error occurred while querying the database:", error);

    return new NextResponse("An error occurred while fetching users.", {
      status: 500,
    });
  }
}
