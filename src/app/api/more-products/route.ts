import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch('https://v0-api-endpoint-request.vercel.app/api/more-products');

    if (!res?.ok) throw new Error('Failed to fetch more products');

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching more products:', error);

    return NextResponse.json({ products: [] }, { status: 500 });
  };
};
