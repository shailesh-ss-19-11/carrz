"use client";

import Link from 'next/link';
import { Shield, CheckCircle2, PhoneCall, Sparkles, Droplets } from 'lucide-react';
import CustomerReviews from '@/components/CustomerReviews';

export default function AdditionalServicesPage() {
    return (
        <div className="bg-background min-h-screen relative overflow-hidden">
            {/* Hero Section */}
            <div className="relative py-12 md:py-24 lg:py-32 overflow-hidden border-b border-surface-border">


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" />
                        Premium Care Solutions
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary mb-6 tracking-tight">Additional Services</h1>
                    <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">Elevate your cars appearance and hygiene with our specialized rubbing, polishing, and deep interior cleaning processes.</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-12 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 md:space-y-12">

                {/* Car Rubbing & Polishing Section */}
                <div className="md:bg-surface/50 md:backdrop-blur-md md:rounded-[2.5rem] md:p-14 md:border md:border-surface-border md:shadow-xl">
                    <div className="flex items-center justify-between mb-8 border-b border-surface-border pb-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Car Rubbing & Polishing</h2>
                        <div className="hidden md:flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center">
                            <Sparkles className="w-8 h-8 text-primary" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Why Should You Get It? */}
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-4">Why Should You Get Car Rubbing & Polishing?</h3>
                            <p className="text-muted text-lg leading-relaxed font-light">
                                Car rubbing and polishing is a process that removes minor scratches, swirl marks, oxidation, and dullness from your car’s paint surface. It restores the original shine and smoothness of the paint, making your car look like new again. This service is ideal for maintaining your car’s premium appearance.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-6">Benefits of Car Rubbing & Polishing</h3>
                            <ul className="space-y-4">
                                {[
                                    { title: 'Scratch Removal', desc: 'Removes light scratches and swirl marks.' },
                                    { title: 'Restores Shine', desc: 'Brings back the original gloss and smooth finish.' },
                                    { title: 'Paint Correction', desc: 'Eliminates oxidation and dullness.' },
                                    { title: 'Enhanced Appearance', desc: 'Makes your car look fresh and well-maintained.' },
                                    { title: 'Surface Protection', desc: 'Prepares the surface for waxing or coating.' },
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="bg-primary/10 rounded-full p-1.5 shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <span className="text-foreground font-bold">{benefit.title} &ndash; </span>
                                            <span className="text-muted text-base leading-relaxed">{benefit.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Interior Cleaning Section */}
                <div className="md:bg-surface/50 md:backdrop-blur-md md:rounded-[2.5rem] md:p-14 md:border md:border-surface-border md:shadow-xl">
                    <div className="flex items-center justify-between mb-8 border-b border-surface-border pb-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Interior Cleaning</h2>
                        <div className="hidden md:flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center">
                            <Droplets className="w-8 h-8 text-primary" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Why Should You Get It? */}
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-4">Why Should You Get Interior Cleaning?</h3>
                            <p className="text-muted text-lg leading-relaxed font-light">
                                Interior cleaning is essential to maintain hygiene and comfort inside your car. Over time, dust, dirt, bacteria, and bad odors accumulate inside the vehicle. Professional interior cleaning ensures a clean, fresh, and healthy environment for you and your passengers.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-6">Benefits of Interior Cleaning</h3>
                            <ul className="space-y-4">
                                {[
                                    { title: 'Deep Cleaning', desc: 'Removes dust and dirt from seats, carpets, and dashboard.' },
                                    { title: 'Odor Removal', desc: 'Eliminates unpleasant smells from inside the car.' },
                                    { title: 'Germ & Bacteria Removal', desc: 'Keeps your car hygienic and safe.' },
                                    { title: 'Improved Comfort', desc: 'Clean interiors enhance driving experience.' },
                                    { title: 'Interior Protection', desc: 'Maintains and increases the life of interior materials.' },
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="bg-primary/10 rounded-full p-1.5 shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <span className="text-foreground font-bold">{benefit.title} &ndash; </span>
                                            <span className="text-muted text-base leading-relaxed">{benefit.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Customer Reviews */}
                <CustomerReviews />

                {/* Call to Action */}
                <div className="pt-8 text-center pb-12">
                    <a
                        href="tel:+917709959881"
                        className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 bg-primary text-white font-bold text-xl rounded-full hover:bg-primary-dark shadow-[0_10px_30px_rgba(255,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,0,0,0.5)] transition-all duration-300 hover:-translate-y-1"
                    >
                        <PhoneCall className="w-6 h-6" />
                        Call Now to Book Service
                    </a>
                </div>

            </div>
        </div>
    );
}
