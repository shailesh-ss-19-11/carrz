import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function OfferBanner() {
    return (
        <section className="pb-12 pt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
            <Link
                href="/detailing-studio"
                className="group relative block w-full rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-1 block bg-surface border border-surface-border"
            >
                {/* Decorative Elements */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-3xl rounded-full pointer-events-none group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 blur-3xl rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />

                <div className="flex flex-col md:flex-row min-h-[300px] w-full relative z-10">
                    {/* Offer Image Area */}
                    <div className="w-full md:w-3/5 lg:w-2/3 h-[250px] md:h-auto shrink-0 relative overflow-hidden bg-black">
                        <Image
                            src="/offers/offer1.jpeg"
                            alt="Rubbing Polishing Special Offer"
                            fill
                            className="object-cover md:object-[center_30%] lg:object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-8 md:hidden">
                            <h3 className="text-2xl font-black text-white shadow-sm ">Exclusive Deal</h3>
                            <p className="text-white/90 font-medium">Rubbing Polishing in just ₹1999</p>
                        </div>
                    </div>

                    {/* Offer Details Area (Desktop visible, mobile shifted) */}
                    <div className="w-full md:w-2/5 lg:w-1/3 bg-surface/90 backdrop-blur-md flex flex-col justify-center p-8 md:p-10 border-t md:border-t-0 md:border-l border-surface-border/50 relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            {/* Stylized background text */}
                            <span className="text-6xl font-black uppercase tracking-tighter">Offer</span>
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary border border-primary/30 text-xs font-black uppercase tracking-widest rounded-full mb-4 shadow-sm">
                                Limited Time
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4 leading-tight tracking-tight hidden md:block">
                                Restore Your <br /><span className="text-primary ">Car's Glory</span>
                            </h2>

                            <p className="text-muted text-sm lg:text-base mb-8 leading-relaxed font-medium">
                                Get our professional 3-step Rubbing & Polishing service at an unbeatable price. Remove scratches, swirls, and restore showroom shine.
                            </p>

                            <div className="flex items-center justify-between border-t border-surface-border/50 pt-6">
                                <div>
                                    <p className="text-xs text-muted uppercase tracking-widest font-bold mb-1">Special Price</p>
                                    <p className="text-3xl lg:text-4xl font-black text-foreground">₹1999<span className="text-sm font-medium text-muted line-through ml-2">₹2999</span></p>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center group-hover:scale-110 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-transform duration-300">
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
}
