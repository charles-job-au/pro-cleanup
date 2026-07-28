import { StarIcon } from "@heroicons/react/24/solid";
import FadeIn from "./FadeIn";

const reviews = [
    {
        name: "Aashma Bhagat",
        rating: 5,
        text: "Excellent service! Charles did an amazing job. The carpet steam cleaning was done professionally and the results were amazing. My carpets look fresh, clean, and almost new. Very happy with the job and highly recommend!",
    },
    {
        name: "Pranil Rana",
        rating: 5,
        text: "Fantastic service. Carpets came up incredibly clean and fresh. Very professional and reliable. Highly recommend!",
    },
    {
        name: "Rejane Aguiar",
        rating: 5,
        text: "Great job, I highly recommend it, I really liked the sofa cleaning.",
    },
    {
        name: "Nina Halai",
        rating: 5,
        text: "Great service, Charles did an amazing job. Thank you!",
    },
];

export default function Reviews() {
    return (
        <FadeIn>
            <div id="reviews" className="mx-auto mt-16 mb-16 max-w-3xl text-center">
                <h2 className="text-5xl font-bold text-gray-900">
                    <span className="relative inline-block">
                        Reviews

                        <svg
                            className="absolute -bottom-3 left-0 w-full"
                            viewBox="0 0 180 12"
                            fill="none"
                        >
                            <path
                                d="M2 9C40 2 80 2 178 8"
                                stroke="#38bdf8"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </h2>
            </div>


flex h-full min-h-[320px] flex-col 

            {/* Reviews */}
            <div className=" px-6 grid gap-6 md:grid-cols-2 lg:px-12">
                {reviews.map((review) => (
                    <div
                        key={review.name}
                        className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        {/* Estrelas */}
                        <div className="flex items-center gap-1">

                            {[...Array(review.rating)].map((_, i) => (
                                <StarIcon
                                    key={i}
                                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>

                        {/* Texto */}
                        <p className="mt-6 leading-7 text-gray-600 italic">
                            "{review.text}"
                        </p>

                        {/* Pessoa */}
                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex h-full w-12 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700">
                                {review.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">
                                    {review.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Google Review
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </FadeIn>
    );
}