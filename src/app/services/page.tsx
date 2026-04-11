import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Car Detailing & Washing Services in Nagpur',
    description: 'Explore our range of premium doorstep car detailing services in Nagpur: Foam Wash, Interior Deep Cleaning, Ceramic Coating, PPF, Graphene Coating and more. Serving Manish Nagar, Narendra Nagar, and all of Nagpur.',
    keywords: ['car washing services nagpur', 'doorstep car wash nagpur', 'interior detailing nagpur', 'ceramic coating nagpur', 'car scratch removal nagpur', 'best car care services near me']
};

const doorstepServices = [
    {
        title: "Bucket / Hand Wash",
        image: "/service-cards/image1.jpeg",
        desc: "Premium two-bucket hand wash method that prevents swirl marks and scratches. Safe, gentle & effective.",
        link: "/handbucket-wash",
        price: "From ₹299"
    },
    {
        title: "Pressure Wash",
        image: "/service-cards/image2.jpeg",
        desc: "High-pressure deep cleaning that removes stubborn mud, dust, and grime from every corner of your car.",
        link: "/pressure-wash",
        price: "From ₹499"
    },
];

const detailingServices = [
    {
        title: "Premium Foam Wash",
        image: "/car-detailing-icons/premium-car-wash.jpeg",
        link: "/detailing-studio/premium-car-wash",
        price: "From ₹399",
        desc: "Rich foam wash with pH-neutral shampoo for a scratch-free, showroom-grade finish."
    },
    {
        title: "Interior Detailing",
        image: "/car-detailing-icons/interior-cleaning.jpeg",
        link: "/detailing-studio/interior-detailing",
        price: "From ₹1,999",
        desc: "Deep vacuuming, stain removal, seat cleaning, dashboard polish & odor elimination."
    },
    {
        title: "Exterior Polishing",
        image: "/car-detailing-icons/exterior-polishing.jpeg",
        link: "/detailing-studio/exterior-polishing",
        price: "From ₹1,999",
        desc: "Machine rubbing & polishing to restore paint clarity and remove swirl marks."
    },
    {
        title: "Ceramic Coating",
        image: "/car-detailing-icons/ceramic-coating.jpeg",
        link: "/detailing-studio/ceramic-coating",
        price: "From ₹12,999",
        desc: "Premium 9H ceramic layer for years of hydrophobic protection and mirror-like gloss."
    },
    {
        title: "Graphene Coating",
        image: "/car-detailing-icons/graphene-coating.jpeg",
        link: "/detailing-studio/graphene-coating",
        price: "From ₹14,999",
        desc: "Next-gen graphene technology for superior heat resistance and anti-static protection."
    },
    {
        title: "PPF (Paint Protection Film)",
        image: "/car-detailing-icons/ppf.jpeg",
        link: "/detailing-studio/ppf",
        price: "From ₹64,999",
        desc: "Self-healing transparent film that shields your paint from chips, scratches & UV damage."
    },
    {
        title: "Salt Cleaning",
        image: "/car-detailing-icons/salt-cleaning.jpeg",
        link: "/detailing-studio/salt-cleaning",
        price: "From ₹999",
        desc: "Removes salt deposits, water spots and mineral stains for a clean, fresh surface."
    },
    {
        title: "Engine Restoration",
        image: "/car-detailing-icons/engine-cleaning.jpg",
        link: "/detailing-studio/engine-restoration",
        price: "From ₹999",
        desc: "Deep engine bay cleaning and dressing to restore performance and prevent corrosion."
    },
    {
        title: "Glass Polishing & Coating",
        image: "/car-detailing-icons/glass-polishing.png",
        link: "/detailing-studio/glass-polishing-coating",
        price: "From ₹999",
        desc: "Crystal-clear glass polishing with hydrophobic coating for improved visibility."
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section with Image */}
            <section className="relative">
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative overflow-hidden">
                    <img
                        src="/bgs/services-hero.jpg"
                        alt="Premium Car Care Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                        <div className="max-w-7xl mx-auto">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3 tracking-tight">Our Services</h1>
                            <p className="text-foreground/80 max-w-2xl text-sm md:text-lg font-light">Premium doorstep car care & detailing services in Nagpur. We bring the showroom experience to your home.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

                {/* Doorstep Car Wash Section */}
                <div className="mb-16 md:mb-24">
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-primary tracking-tight mb-2">Doorstep Car Wash</h2>
                        <p className="text-muted text-sm md:text-base max-w-xl">Professional car washing at your doorstep — no driving, no waiting. Just book and relax.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {doorstepServices.map((service, idx) => (
                            <Link href={service.link} key={idx} className="group">
                                <div className="bg-surface/50 border border-surface-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <span className="absolute bottom-3 left-3 bg-primary text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full">{service.price}</span>
                                    </div>
                                    <div className="p-5 md:p-6">
                                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-muted text-sm leading-relaxed mb-4">{service.desc}</p>
                                        <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                            View Packages <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Detailing Studio Section */}
                <div className="mb-16 md:mb-24">
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-primary tracking-tight mb-2">Car Detailing Studio</h2>
                        <p className="text-muted text-sm md:text-base max-w-xl">Advanced detailing, coating & protection services to keep your car looking brand new.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {detailingServices.map((service, idx) => (
                            <Link href={service.link} key={idx} className="group">
                                <div className="bg-surface/50 border border-surface-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    <div className="relative h-48 md:h-52 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <span className="absolute bottom-3 left-3 bg-primary text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full">{service.price}</span>
                                    </div>
                                    <div className="p-5 md:p-6 flex flex-col flex-1">
                                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
                                        <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="bg-gradient-to-br from-zinc-900 to-black dark:from-zinc-100 dark:to-white text-white dark:text-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
                    <div className="flex-1 space-y-3 text-center md:text-left relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Not sure what your car needs?</h3>
                        <p className="text-white/70 dark:text-black/70 text-base md:text-lg font-medium">Our experts will inspect your car and recommend the best bespoke care package.</p>
                    </div>
                    <a
                        href="https://wa.me/917709959881?text=Hello%20Rediance!%20I%20need%20help%20choosing%20a%20service."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-primary text-white font-bold text-base md:text-lg rounded-full hover:bg-primary-dark transition-all duration-300 shrink-0 shadow-[0_4px_20px_rgba(255,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,0,0,0.5)] flex items-center gap-2 hover:-translate-y-1 relative z-10"
                    >
                        Talk to an Expert
                    </a>
                </div>
            </div>
        </div>
    );
}
