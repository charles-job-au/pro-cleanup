import ServiceCard from "./ServiceCards";

const services = [
    {
        title: "Carpet Cleaning",
        description: "Remove stubborn stains, eliminate allergens, and extend the life of your carpets while creating a healthier home.",
        image: "/images/carpet-card.png",
    },
    {
        title: "Upholstery Cleaning",
        description: "Refresh your sofas and chairs by removing dirt, stains, and odours, leaving them clean, comfortable, and inviting.",
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
        description: "Cleaning solutions for offices, retail stores, childcare centres, hotels, and commercial spaces.",
        image: "/images/corporate-card.png",
    }
];

export default function Services() {
    return (
        <section className="min-h-screen flex items-center">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ml-5 mr-5">
                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        title={""}
                        description={service.description}
                        image={service.image}
                    />
                ))}
            </div>
        </section>
    )
}