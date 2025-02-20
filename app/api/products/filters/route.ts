import { NextResponse } from 'next/server';

export function GET() {

    const categories = [
        { name: 'Totes', href: `?category=totes` },
        { name: 'Backpacks', href: `?category=backpacks` },
        { name: 'Travel Bags', href: `?category=travel-bags` },
        { name: 'Hip Bags', href: `?category=hip-bags` },
        { name: 'Laptop Sleeves', href: `?category=laptop-sleeves` },
    ];
    return NextResponse.json(categories);
}

export async function POST(req: Request) {
    const body = await req.json();
    return NextResponse.json({ message: "Método POST recibido", data: body });
}
