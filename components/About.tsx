import {
    SparklesIcon,
    ShieldCheckIcon,
    ClockIcon,
} from "@heroicons/react/24/solid";

export default function About() {
  return (
    <section id="about" className="py-6 px-6">
      <div className="w-full ">
                <div className="max-w-4xl flex flex-col gap-6">
                    {/* Título */}
                    <div>
                        <span className="text-sm uppercase tracking-[0.2em] text-amber-500 font-semibold">
                            Professional Carpet Cleaning
                        </span>

                        <h2 className="mt-2 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                            Saying Goodbye to Dirt
                        </h2>
                    </div>

                    {/* Bloco de Texto (Opção Dividida) */}
                    <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6 ">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                            Over time, carpets, upholstery, and leather surfaces build up dirt, dust, allergens, stains, and unwanted odours. These hidden contaminants can affect the freshness, comfort, and appearance of your home or workplace.
                        </p>
                    </div>

                    <p className="text-base md:text-lg leading-8 text-gray-600">
                        At Pro Cleanup Carpet Cleaning, we use advanced equipment and effective cleaning techniques to deliver outstanding results. Whether your home needs a deep refresh or your business requires reliable cleaning support, our team provides tailored cleaning solutions to help homeowners and businesses across Perth maintain cleaner, fresher, and more welcoming spaces.
                    </p>
                </div>

                <div className="mt-4 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">
                            <SparklesIcon className="h-7 w-7 text-sky-600" />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900">
                            Eco-Friendly
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Safe cleaning products that are gentle on your family, pets, and the environment.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">
                            <ClockIcon className="h-7 w-7 text-sky-600" />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900">
                            Fast Drying
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Advanced equipment reduces drying time so you can get back to your routine faster.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">
                            <ShieldCheckIcon className="h-7 w-7 text-sky-600" />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900">
                            Fully Insured
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Professional service with full insurance for complete peace of mind.
                        </p>
                    </div>
                </div>
            </div>
    </section>
  );
}