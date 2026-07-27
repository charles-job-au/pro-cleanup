"use client";

import {
    SparklesIcon,
    ShieldCheckIcon,
    ClockIcon,
    StarIcon,
} from "@heroicons/react/24/solid";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen items-center overflow-hidden "
        >
            {/* Background */}
            
            {/* Content */}
            <div className="relative z-10 mx-auto w-full px-6 lg:px-8 bg-gradient-to-b from-[#5D8A78] to-[#1E5F74] py-5 lg:py-10">

                <div className="w-full">

                    {/* Heading */}

                    <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">

                        Carpet Cleaning in Perth

                    </h1>

                    {/* Subtitle */}

                    <p className="mt-8 text-lg leading-8 text-gray-200">

                        Over time, carpets, upholstery, and leather surfaces build up dirt, dust, allergens, stains, and unwanted odours. These hidden contaminants can affect the freshness, comfort, and appearance of your home or workplace.
                    </p>

                    <p className="mt-8 text-lg leading-8 text-gray-200">
                        A Cleaner Space Starts with the Right Cleaning Solution.

                        At Pro Cleanup Carpet Cleaning, we use advanced equipment and effective cleaning techniques to deliver outstanding results. Whether your home needs a deep refresh or your business requires reliable cleaning support, our team provides tailored cleaning solutions to help homeowners and businesses across Perth maintain cleaner, fresher, and more welcoming spaces.

                    </p>

                    {/* Buttons */}

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        {/* Google Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">

                            <StarIcon className="h-5 w-5 text-yellow-400" />

                            <span className="text-sm text-white">
                                5.0 Google Rating | Perth Homes & Businesses
                            </span>

                        </div>

                        <a
                            href="#contact"
                            className="
                                        rounded-full
                                        bg-[#1E5F74]
                                        px-8
                                        py-4
                                        text-center
                                        font-semibold
                                        text-white
                                        shadow-lg
                                        transition-all
                                        duration-300
                                        hover:bg-[#164B5E]
                                        hover:-translate-y-1
                                        hover:shadow-2xl
                                        "
                        >
                            Get a Free Quote
                        </a>

                        <a
                            href="tel:+61000000000"
                            className="
                                        rounded-full
                                        border
                                        border-white/40
                                        bg-white/10
                                        px-8
                                        py-4
                                        text-center
                                        font-semibold
                                        text-white
                                        backdrop-blur-md
                                        transition-all
                                        duration-300
                                        hover:bg-white
                                        hover:text-[#1E5F74]
                                        "
                        >
                            Call Now
                        </a>
                    </div>

                    {/* Features */}

                    <div className="mb-5 mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">

                        <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-md">

                            <SparklesIcon className="h-6 w-6 text-[#7CC6E8]" />

                            <span className="text-white">
                                Eco-Friendly
                            </span>

                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-md">

                            <ClockIcon className="h-6 w-6 text-[#7CC6E8]" />

                            <span className="text-white">
                                Fast Drying
                            </span>

                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-md">

                            <ShieldCheckIcon className="h-6 w-6 text-[#7CC6E8]" />

                            <span className="text-white">
                                Fully Insured
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}