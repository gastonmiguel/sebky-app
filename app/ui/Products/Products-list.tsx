import { Suspense } from "react";
import {useEffect, useState} from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/app/lib/definitions";
import Image from "next/image";


function ProductsList() {
    const [products, setProducts] = useState<Product[]>([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        const category = searchParams.get("category") || "";
        const url = `/api/products/?category=${category}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [searchParams]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Decime, ¿cuál te gusta?</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <Image
                                width="176"
                                height="256"
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            ></Image>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductsList />
        </Suspense>
    );
}