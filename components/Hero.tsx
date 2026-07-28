"use client";

import {
    SparklesIcon,
    ShieldCheckIcon,
    ClockIcon,
    StarIcon,
} from "@heroicons/react/24/solid";

export default function Hero() {
    return (
        <section>
            <div id="home" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-6 lg:grid-cols-2 lg:px-10"
            >
                {/* Texto */}
                <div className="flex flex-col">

                    {/* Título */}
                    <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
                        Professional
                        <span className="block text-sky-500">
                            Carpet Cleaning
                        </span>
                        in Perth
                    </h1>

                    {/* Descrição */}
                    <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                        Refresh your carpets, upholstery and leather with professional cleaning
                        services that remove dirt, allergens and stains, leaving your home or
                        business cleaner, healthier and looking its best.
                    </p>

                    {/* Google Rating */}
                    <div className="mt-10 flex w-fit items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-lg">

                        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-sky-50">
                            <span className="text-xl font-bold text-gray-900">
                                5.0
                            </span>

                            <div className="mt-1 flex">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-900">
                                Google Reviews
                            </p>

                            <p className="text-sm text-gray-500">
                                Trusted by homeowners & businesses
                            </p>
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="mt-10">
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-full bg-sky-500 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-sky-600"
                        >
                            Get a Free Quote
                        </a>
                    </div>

                </div>

                {/* Imagem */}
                <div className="relative">

                    {/* Fundo decorativo */}
                    <div className="absolute -left-6 -top-6 h-full w-full rounded-[32px] bg-sky-100" />

                    <img
                        src="/images/hero-background.jpg"
                        alt="Professional Carpet Cleaning"
                        className="relative h-[600px] w-full rounded-[32px] object-cover shadow-2xl"
                    />

                </div>
            </div>
        </section>
    );
}