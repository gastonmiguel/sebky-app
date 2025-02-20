import { NextResponse } from 'next/server';

export function GET(req: Request) {

    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || '';

    const products = [];

    for (let i = 0; i < 4; i++) {
        products.push({
            id: i + 1,
            name: `Product ${i + 1}`,
            href: '#',
            imageSrc: `https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-0${i + 1}.jpg`,
            imageAlt: "Product placeholder image",
            price: `$${i + 1}.${i + 1}`,
            color: i % 2 === 0 ? 'Red' : 'Blue',
            category: category
        });
    }

    return NextResponse.json(products);

}