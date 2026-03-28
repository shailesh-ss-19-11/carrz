"use client";

import Link from 'next/link';
import { Shield, CheckCircle2, PhoneCall, Info, LayoutList, ThumbsUp } from 'lucide-react';
import CustomerReviews from '@/components/CustomerReviews';

export default function CeramicCoatingPage() {
    return (
        <div className="bg-background min-h-screen relative overflow-hidden">
            {/* Hero Section */}
            <div className="relative py-12 md:py-24 lg:py-32 overflow-hidden border-b border-surface-border">


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20 backdrop-blur-sm">
                        <Shield className="w-4 h-4" />
                        Ultimate Liquid Armor
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight">Ceramic <span className="text-primary ">Coating</span></h1>
                    <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">A liquid polymer applied on your vehicle's paint for long-lasting protection and a brilliant gloss finish.</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-12 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="md:bg-surface/50 md:backdrop-blur-md md:rounded-[2.5rem] md:p-14 md:border md:border-surface-border md:shadow-xl space-y-10 md:space-y-16">

                    {/* What is Ceramic Coating? */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-foreground mb-6 tracking-tight flex items-center gap-3">
                            <Info className="w-8 h-8 text-primary" />
                            What is Ceramic Coating?
                        </h2>
                        <p className="text-muted text-lg leading-relaxed font-light">
                            A liquid polymer applied on your car's paint for premium protection and an unmatched shine. It chemically bonds with the factory paint, establishing a layer of durable, hydrophobic glass-like armor that ensures your car looks newly detailed every day.
                        </p>
                    </div>

                    {/* Why? */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-foreground mb-6 tracking-tight flex items-center gap-3">
                            <ThumbsUp className="w-8 h-8 text-primary" />
                            Why choose Ceramic Coating?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: 'Long-lasting Shine', desc: 'Provides a permanent depth and a mirror-like finish that wax simply cannot match.' },
                                { title: 'Repels Dirt & Water', desc: 'Creates an intensely hydrophobic surface where water beads up and rolls off, keeping the car cleaner for longer.' }
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
                                    'High gloss finish',
                                    'Hydrophobic properties',
                                    'Easy and quick cleaning',
                                    'Superior UV protection'
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
                                    { step: 1, title: 'Wash & Correction', desc: 'Thorough wash followed by paint correction to remove imperfections.' },
                                    { step: 2, title: 'Prep Work', desc: 'Surface decontamination and chemical wipe-down.' },
                                    { step: 3, title: 'Application', desc: 'Careful, leveled application of the liquid polymer.' },
                                    { step: 4, title: 'Curing', desc: 'Controlled bonding and hardening of the coating.' },
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
                            Call Now to Book Coating
                        </a>
                        <p className="text-muted mt-4 text-sm font-light">Consult with our detailing experts directly for quotes & sizing.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
