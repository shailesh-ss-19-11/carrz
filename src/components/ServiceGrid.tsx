"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Gem, Clock, ThumbsUp, Wallet, Leaf } from "lucide-react";
import { title } from "process";

export default function ServiceGrid() {
    const services = [
        {
            title: "Bucket / Hand Wash Packages",
            image: "/service-cards/image1.jpeg",
            desc: "Premium hand wash with premium products.",
            link: "/handbucket-wash"
        },
        {
            title: "Pressure Wash Packages",
            image: "/service-cards/image2.jpeg",
            desc: "Deep interior & exterior pressure wash.",
            link: "/pressure-wash"
        },
        {
            title: "Detailing Studio Packages",
            image: "/service-cards/image3.jpeg",
            desc: "Premium detailing packages for your car.",
            link: "/detailing-studio"
        }
    ];

    const detailingServices = [
        {
            title: "premium Foam Wash",
            image: "/car-detailing-icons/premium-car-wash.jpeg",
            link: "/detailing-studio/premium-car-wash"
        },
        {
            title: "Interior Detailing",
            image: "/car-detailing-icons/interior-cleaning.jpeg",
            link: "/detailing-studio/interior-detailing"
        },
        {
            title: "Exterior Polishing",
            image: "/car-detailing-icons/exterior-polishing.jpeg",
            link: "/detailing-studio/exterior-polishing"
        },
        {
            title: "Ceramic Coating",
            image: "/car-detailing-icons/ceramic-coating.jpeg",
            link: "/detailing-studio/ceramic-coating"
        },
        {
            title: "Graphene Coating",
            image: "/car-detailing-icons/graphene-coating.jpeg",
            link: "/detailing-studio/graphene-coating"
        },
        {
            title: "PPF",
            image: "/car-detailing-icons/ppf.jpeg",
            link: "/detailing-studio/ppf"
        }, {
            title: "Salt Cleaning",
            image: "/car-detailing-icons/salt-cleaning.jpeg",
            link: "/detailing-studio/salt-cleaning"
        },
        {
            title: "Engine Restoration",
            image: "/car-detailing-icons/engine-cleaning.jpg",
            link: "/detailing-studio/engine-restoration"
        },
        {
            title: "Glass Polishing / Coating",
            image: "/car-detailing-icons/glass-polishing.png",
            link: "/detailing-studio/glass-polishing-coating"
        }
    ];

    const whyChooseUs = [
        {
            icon: ShieldCheck,
            title: "Trusted Experts",
            desc: "Highly trained professionals dedicated to detailing."
        },
        {
            icon: Gem,
            title: "Premium Products",
            desc: "We use only the best to ensure a showroom finish."
        },
        {
            icon: Clock,
            title: "Time Saving & Affordable",
            desc: "We come to your doorstep at your convenience."
        }
    ];

    return (
        <div className="pt-8 pb-16 md:pt-12 md:pb-24 bg-background relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,0,0.05)_0%,transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-6 md:mb-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4"> <span className="text-primary"> Doorstep Car care services</span></h2>
                    {/* <p className="text-muted max-w-2xl mx-auto text-lg">Comprehensive car care solutions tailored to your vehicle's exact needs, right at your doorstep.</p> */}
                </div>

                <div className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="bg-background border-none rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-transform duration-300 flex flex-col group h-full">
                            {/* Card Image */}
                            <div className="relative h-20 sm:h-32 md:h-48 w-full overflow-hidden shrink-0 bg-surface">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-colors duration-300" />
                            </div>

                            {/* Card Body */}
                            <div className="p-2.5 sm:p-5 md:p-6 flex flex-col flex-1 items-center md:items-start text-center md:text-left">
                                <h3 className="text-[10px] sm:text-sm md:text-xl font-bold tracking-tight text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-2 md:line-clamp-none">
                                    {service.title}
                                </h3>
                                <p className="text-[9px] sm:text-xs md:text-[15px] font-medium text-muted mb-2 md:mb-6 flex-1 hidden sm:block line-clamp-2 leading-relaxed">
                                    {service.desc}
                                </p>

                                {/* Card Footer / Button */}
                                <Link
                                    href={service.link}
                                    className="inline-flex bg-[#ff0000] font-semibold text-white items-center justify-center gap-1 md:gap-2 px-1 py-1.5 sm:px-3 sm:py-2 md:px-6 md:py-3 text-primary hover:bg-primary hover:text-white rounded-lg md:rounded-xl text-[9px] sm:text-sm md:text-base font-semibold transition-colors duration-300 w-full mt-auto"
                                >
                                    <span className="hidden sm:inline">See More</span>
                                    <span className="sm:hidden">View Packages</span>
                                    <ArrowRight className="w-2 h-2 sm:w-3 h-3 md:w-4 md:h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 md:mt-20 mb-6 md:mb-10">
                    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground mb-2 md:mb-4"> <span className="text-primary"> Car Detailing Studio</span></h2>
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 justify-items-center max-w-5xl mx-auto">
                    {detailingServices.map((service, index) => (
                        <Link href={service.link || `/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="flex flex-col items-center group w-full">
                            <div className="w-[72px] h-[72px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_8px_30px_rgba(255,0,0,0.2)] transition-all duration-300 mb-2 sm:mb-3 ring-1 ring-black/5 dark:ring-white/10 group-hover:ring-primary/50 relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                            </div>
                            <h4 className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight text-center text-foreground/90 group-hover:text-primary transition-colors leading-tight">
                                {service.title}
                            </h4>
                        </Link>
                    ))}
                </div>

                {/* why choose us */}
                <div className="mt-12 md:mt-24 w-full">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4"> <span className="text-primary">Why Choose Us?</span></h2>
                        <p className="text-muted max-w-xl mx-auto text-sm md:text-base px-4">Experience the difference with Carrz premium doorstep services and expert care.</p>
                    </div>

                    <div className="w-full overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar scroll-smooth snap-x snap-mandatory">
                        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-fit sm:w-full">
                            {whyChooseUs.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="bg-surface/50 border border-surface-border rounded-[2rem] p-8 flex flex-col items-center text-center w-[280px] sm:w-full shrink-0 snap-center hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                            <Icon className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-sm text-muted font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


                {/* Premium CTA Banner */}
                <div className="mt-12 md:mt-20 bg-gradient-to-br from-zinc-900 to-black dark:from-zinc-100 dark:to-white text-white dark:text-black rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
                    {/* Decorative blurred circle */}
                    <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-primary/30 rounded-full blur-3xl group-hover:bg-primary/40 transition-colors duration-500" />

                    <div className="flex-1 space-y-3 md:space-y-4 text-center md:text-left relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Need help choosing a service?</h3>
                        <p className="text-white/70 dark:text-black/70 text-base md:text-lg font-medium">Our experts will inspect your car and recommend the best bespoke care package.</p>
                    </div>

                    <a
                        href="https://wa.me/917709959881?text=Hello%20Carrz%20Care!%20I%20need%20help%20choosing%20a%20service."
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
