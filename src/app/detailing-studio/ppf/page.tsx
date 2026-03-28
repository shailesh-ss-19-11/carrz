"use client";

import Link from 'next/link';
import { Shield, CheckCircle2, PhoneCall, Info, LayoutList, ThumbsUp } from 'lucide-react';
import CustomerReviews from '@/components/CustomerReviews';

export default function PPFPage() {
    return (
        <div className="bg-background min-h-screen relative overflow-hidden">
            {/* Hero Section */}
            <div className="relative py-12 md:py-24 lg:py-32 overflow-hidden border-b border-surface-border">


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20 backdrop-blur-sm">
                        <Shield className="w-4 h-4" />
                        Ultimate Visual Protection
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight">Paint Protection <span className="text-primary ">Film (PPF)</span></h1>
                    <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">Protect your car's original paint from scratches, stone chips, and environmental damage with our invisible self-healing armor.</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-12 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="md:bg-surface/50 md:backdrop-blur-md md:rounded-[2.5rem] md:p-14 md:border md:border-surface-border md:shadow-xl space-y-10 md:space-y-16">

                    {/* What is PPF? */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-foreground mb-6 tracking-tight flex items-center gap-3">
                            <Info className="w-8 h-8 text-primary" />
                            What is PPF?
                        </h2>
                        <p className="text-muted text-lg leading-relaxed font-light">
                            Paint Protection Film (PPF) is a transparent, high-quality protective polyurethane film applied directly on your car's exterior paint panels. It acts as a sacrificial layer designed to absorb impacts and protect your vehicle from scratches, stone chips, and harsh environmental damage.
                        </p>
                    </div>

                    {/* Why should you do PPF? */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-foreground mb-6 tracking-tight flex items-center gap-3">
                            <ThumbsUp className="w-8 h-8 text-primary" />
                            Why should you do PPF?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: 'Protects Original Paint', desc: 'Keeps the factory paint looking untouched.' },
                                { title: 'Prevents Daily Damage', desc: 'Guards against shopping carts and key scratches.' },
                                { title: 'Long-term Investment', desc: 'Maintains resale value by preserving exterior quality.' }
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
                                    'Scratch & swirl protection',
                                    'Self-healing technology',
                                    'Advanced UV protection',
                                    'Hyper-glossy finish'
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
                                    { step: 1, title: 'Deep Cleaning', desc: 'Removing all dirt, grime, and pre-existing wax.' },
                                    { step: 2, title: 'Surface Preparation', desc: 'Decontaminating panels and minor paint correction.' },
                                    { step: 3, title: 'PPF Installation', desc: 'Precision application using premium grade gels.' },
                                    { step: 4, title: 'Final Finishing', desc: 'Curing, edge-wrapping, and strict quality checks.' },
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
                            Call Now to Book PPF
                        </a>
                        <p className="text-muted mt-4 text-sm font-light">Consult with our PPF experts directly for quotes & sizing.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
