import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany();

    console.log(users);

    return NextResponse.json(users);
  } catch (error) {
    // Log the error
    console.error("Error occurred while querying the database:", error);

    // Return an error response with a custom status code
    return new NextResponse("An error occurred while fetching users.", {
      status: 500,
    });
  }
}
