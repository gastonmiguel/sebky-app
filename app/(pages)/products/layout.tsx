'use client'

import {useEffect, useState} from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Header from "@/app/ui/Layout/Header";
import { ReactNode } from "react";
import Link from "next/link";
import {Category} from "@/app/lib/definitions";

export default function ProductsLayout({ children }: { children: ReactNode }) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetch('/api/products/filters?filter=categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <>
            <Header />
            <div className="bg-white">
                <div>
                    {/* Mobile filter dialog */}
                    <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                        <DialogBackdrop
                            transition
                            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                        />

                        <div className="fixed inset-0 z-40 flex">
                            <DialogPanel
                                transition
                                className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
                            >
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Categorías</h2>
                                    <button
                                        type="button"
                                        onClick={() => setMobileFiltersOpen(false)}
                                        className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon aria-hidden="true" className="size-6" />
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                        {categories.map((category) => (
                                            <li key={category.name}>
                                                <Link href={category.href} className="block px-2 py-3"> {category.name} </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </form>
                            </DialogPanel>
                        </div>
                    </Dialog>

                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Productos</h1>

                            <div className="flex items-center">
                                <Menu as="div" className="relative inline-block text-left">

                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        <div className="py-1">

                                        </div>
                                    </MenuItems>
                                </Menu>

                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(true)}
                                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                >
                                    <span className="sr-only">Filters</span>
                                    <FunnelIcon aria-hidden="true" className="size-5" />
                                </button>
                            </div>
                        </div>

                        <section aria-labelledby="products-heading" className="pt-6 pb-24">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                {/* Filters */}
                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                        {categories.map((category) => (
                                            <li key={category.name}>
                                                <Link href={category.href}>{category.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </form>

                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    {children}
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}
