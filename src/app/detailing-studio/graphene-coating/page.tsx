"use client";

import Link from 'next/link';
import { Shield, CheckCircle2, PhoneCall, Info, LayoutList, ThumbsUp } from 'lucide-react';
import CustomerReviews from '@/components/CustomerReviews';

export default function GrapheneCoatingPage() {
    return (
        <div className="bg-background min-h-screen relative overflow-hidden">
            {/* Hero Section */}
            <div className="relative py-12 md:py-24 lg:py-32 overflow-hidden border-b border-surface-border">


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20 backdrop-blur-sm">
                        <Shield className="w-4 h-4" />
                        Next-Gen Protection
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary mb-6 tracking-tight">Graphene Coating</h1>
                    <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">Advanced next-generation coating utilizing graphene for superior durability, heat resistance, and long-lasting performance.</p>
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
