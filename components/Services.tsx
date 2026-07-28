import ServiceCard from "./ServiceCards";

const services = [
    {
        title: "Carpet Cleaning",
        description: "Remove stubborn stains, eliminate allergens, and extend the life of your carpets while creating a healthier home.",
        image: "/images/carpet-card.png",
    },
    {
        title: "Upholstery Cleaning",
        description: "Refresh your couches and chairs by removing dirt, stains, and odours, leaving them clean, comfortable, and inviting.",
        image: "/images/upholstery-card.png",
    },
    {
        title: "Mattress Cleaning",
        description: "Reduce allergens, dust mites, and bacteria for a cleaner mattress and a fresher, more restful sleep.",
        image: "/images/mattress-card.png",
    },
    {
        title: "Leather Cleaning",
        description: "Restore your leather's natural beauty while keeping it soft, conditioned, and protected against everyday wear.",
        image: "/images/leather-card.png",
    },
    {
        title: "Car Seat Cleaning",
        description: "Remove stains, spills, and unpleasant odours to keep your car interior fresh, hygienic, and looking its best.",
        image: "/images/car-seat-card.png",
    },
    {
        title: "Corporate Cleaning",
        description: "Commercial Carpet Cleaning and more. Cleaning solutions for offices, retail stores, childcare centres, hotels, and commercial spaces.",
        image: "/images/corporate-card.png",
    }
];

export default function Services() {
    return (
        <section id="services" className="min-h-screen flex items-center">
            <div className="w-full px-6 py-6">
                <div className="mx-auto mt-16 mb-16 max-w-3xl text-center">
                    <h2 className="text-5xl font-bold text-gray-900">
                        Cleaning {" "}
                        <span className="relative inline-block">
                            Services
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

                <a href="#contact" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ml-5 mr-5">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                        />
                    ))}
                </a>
            </div>
        </section>
    )
}