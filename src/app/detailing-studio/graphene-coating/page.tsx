"use client";

import Link from 'next/link';
import { Shield, CheckCircle2, PhoneCall, Info, LayoutList, ThumbsUp } from 'lucide-react';
import CustomerReviews from '@/components/CustomerReviews';

export default function GrapheneCoatingPage() {
    return (
        <div className="bg-background min-h-screen relative overflow-hidden">
            {/* Hero Section */}
            <div className="pt-10 pb-10 md:pt-16 md:pb-16 border-b border-surface-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 md:mb-10 tracking-tight text-center">Graphene Coating</h1>
                    <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border-2 border-surface-border shadow-2xl">
                        <img
                            src="/car-detailing-icons/graphene-coating.jpeg"
                            alt="Graphene Coating"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 md:mt-8">
                        <div className="bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
                            <span className="text-primary font-extrabold text-lg md:text-xl">Starting from ₹14,999</span>
                        </div>
                        <a
                            href="https://wa.me/917709959881?text=Hi%2C%20I%27m%20interested%20in%20Graphene%20Coating.%20Please%20share%20more%20details."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold text-lg rounded-full hover:bg-[#1ebe57] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            Book Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-12 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="md:bg-surface/50 md:backdrop-blur-md md:rounded-[2.5rem] md:p-14 md:border md:border-surface-border md:shadow-xl space-y-10 md:space-y-16">

                    {/* What is Graphene Coating? */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-foreground mb-6 tracking-tight flex items-center gap-3">
                            <Info className="w-8 h-8 text-primary" />
                            What is Graphene?
                        </h2>
                        <p className="text-muted text-lg leading-relaxed font-light">
                            Graphene is an advanced carbon-based nano-coating that offers significantly better durability and strength than traditional ceramic coatings. It forms a tighter honeycomb lattice that provides unprecedented protection for your vehicle's paint.
                        </p>
                    </div>

                    {/* Why? */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-foreground mb-6 tracking-tight flex items-center gap-3">
                            <ThumbsUp className="w-8 h-8 text-primary" />
                            Why choose Graphene?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: 'Heat Resistance', desc: 'Superior heat dispersion preventing water spotting.' },
                                { title: 'Long-lasting', desc: 'Provides years of durable protection against elements.' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-background border border-surface-border rounded-2xl p-6 group hover:border-primary/50 transition-colors">
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary mb-2 transition-colors">{item.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits & Process */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 pt-8 border-t border-surface-border">
                        {/* Benefits */}
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight flex items-center gap-2">
                                <Shield className="w-6 h-6 text-primary" />
                                Core Benefits
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    'Durable surface protection',
                                    'Anti-static properties',
                                    'Less water spots',
                                    'Deep mirror-like gloss'
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-4">
                                        <div className="bg-primary/10 rounded-full p-1.5 shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-foreground/90 font-medium text-lg leading-relaxed">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Process */}
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight flex items-center gap-2">
                                <LayoutList className="w-6 h-6 text-primary" />
                                Application Process
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { step: 1, title: 'Correction', desc: 'Professional paint work correction.' },
                                    { step: 2, title: 'Cleaning', desc: 'Intensive surface decontamination.' },
                                    { step: 3, title: 'Application', desc: 'Graphene coating application.' },
                                    { step: 4, title: 'Curing', desc: 'Thermal curing for maximum hardness.' },
                                ].map((item) => (
                                    <div key={item.step} className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-surface-border text-primary font-bold shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="text-foreground font-bold">{item.title}</h4>
                                            <p className="text-muted text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Customer Reviews */}
                    <CustomerReviews />

                    {/* Call to Action */}
                    <div className="pt-8 text-center">
                        <a
                            href="tel:+917709959881"
                            className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 bg-primary text-white font-bold text-xl rounded-full hover:bg-primary-dark shadow-[0_10px_30px_rgba(255,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,0,0,0.5)] transition-all duration-300 hover:-translate-y-1"
                        >
                            <PhoneCall className="w-6 h-6" />
                            Call Now to Book Graphene
                        </a>
                        <p className="text-muted mt-4 text-sm font-light">Consult with our coating experts directly for quotes & sizing.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
