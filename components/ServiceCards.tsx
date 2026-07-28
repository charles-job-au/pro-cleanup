import Image from "next/image";
import FadeIn from "./FadeIn";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
}

export default function ServiceCard({
    title,
    description,
    image,
}: ServiceCardProps) {
    return (
        <FadeIn>
            <div className="h-full group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {title}
                    </h3>

                    <p className="text-gray-600">
                        {description}
                    </p>
                </div>
            </div>
        </FadeIn>
    );
}