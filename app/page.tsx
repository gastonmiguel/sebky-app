import Logo from "@/app/ui/Logo";
import Image from "next/image";

export default function Home() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <Logo className="text-4xl text-fuchsia-600 sm:text-6xl" />
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-10">
                            Bienvenida!
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Próximamente estarán disponibles los productos de la tienda online de <Logo />
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <Image
                                                    alt=""
                                                    width="176"
                                                    height="256"
                                                    src="/img/home/home-page-03-hero-image-tile-01.jpg"
                                                    className="size-full object-cover"
                                                ></Image>
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    width="176"
                                                    height="256"
                                                    src="/img/home/home-page-03-hero-image-tile-02.jpg"
                                                    className="size-full object-cover"
                                                ></Image>
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    width="176"
                                                    height="256"
                                                    src="/img/home/home-page-03-hero-image-tile-03.jpg"
                                                    className="size-full object-cover"
                                                ></Image>
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    width="176"
                                                    height="256"
                                                    src="/img/home/home-page-03-hero-image-tile-04.jpg"
                                                    className="size-full object-cover"
                                                ></Image>
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    width="176"
                                                    height="256"
                                                    src="/img/home/home-page-03-hero-image-tile-05.jpg"
                                                    className="size-full object-cover"
                                                ></Image>
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    width="176"
                                                    height="256"
                                                    src="/img/home/home-page-03-hero-image-tile-06.jpg"
                                                    className="size-full object-cover"
                                                ></Image>
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    width="176"
                                                    height="256"
                                                    src="/img/home/home-page-03-hero-image-tile-07.jpg"
                                                    className="size-full object-cover"
                                                ></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*<a
                                href="/products"
                                className="inline-block rounded-md border border-transparent bg-fuchsia-600 px-8 py-3 text-center font-medium text-white hover:bg-fuchsia-700"
                            >
                                Ver tienda online
                            </a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
