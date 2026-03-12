"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Droplets, Sparkles, ShieldCheck, ChevronDown, X } from "lucide-react";
import Link from "next/link";

const packages = [
    {
        id: "basic",
        name: "Basic Wash",
        price: "499",
        billing: "/ Month",
        icon: <Droplets className="w-10 h-10 text-primary" />,
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop",
        shortDesc: "Regular exterior hand wash & interior vacuuming to keep your car looking fresh.",
        details: [
            "4 Washes / Month",
            "Regular Interior & Exterior Hand Wash with Shampoo",
            "1 Interior Vacuum Cleaning",
            "1 Dashboard Polish",
            "1 Tyre Polish",
            "1 Greasing Service"
        ]
    },
    {
        id: "premium",
        name: "Premium Wash",
        price: "599",
        billing: "/ Month",
        icon: <Sparkles className="w-10 h-10 text-primary" />,
        image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1000&auto=format&fit=crop",
        shortDesc: "Enhanced care with deep cleaning, polishing, and glass treatment.",
        details: [
            "4 Washes / Month",
            "Interior & Exterior Shampoo Hand Wash",
            "2 Interior Vacuum Cleanings",
            "2 Dashboard Polish",
            "2 Tyre Polish",
            "2 Greasing Services",
            "Exterior Glass Cleaning"
        ]
    },
    {
        id: "elite",
        name: "Elite Wash",
        price: "799",
        billing: "/ Month",
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        image: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=1000&auto=format&fit=crop",
        shortDesc: "The ultimate showroom shine package with interior sanitization and premium detailing.",
        details: [
            "4 Washes / Month",
            "Premium Interior & Exterior Hand Wash",
            "4 Interior Vacuum Cleanings",
            "4 Dashboard Polish",
            "4 Tyre Polish",
            "2 Greasing Services",
            "Interior Sanitization"
        ]
    }
];

export default function PremiumPackages() {
    const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        // If it's already flipped by click, let's keep it flipped or allow closing
        // For mobile, tapping the card flips it.
        if (flippedCard === index) {
            setFlippedCard(null); // click again to unflip if needed
        } else {
            setFlippedCard(index);
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* 3D Flip Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full perspective-1000">
                {packages.map((pkg, index) => (
                    <div
                        key={pkg.id}
                        className={`group relative h-96 w-full cursor-pointer transform-style-3d transition-transform duration-700
              md:hover:rotate-y-180 ${flippedCard === index ? 'rotate-y-180' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        {/* Front of Card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden bg-surface border border-surface-border rounded-2xl p-8 flex flex-col items-center justify-center text-center glow-box-hover transition-all duration-300">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20">
                                {pkg.icon}
                            </div>
                            <h3 className="text-3xl font-extrabold text-foreground mb-4 tracking-wide">{pkg.name}</h3>
                            <p className="text-muted text-sm px-2 font-light">{pkg.shortDesc}</p>

                            <div className="mt-8 flex items-end justify-center gap-1">
                                <span className="text-sm text-foreground/70 font-medium md:hidden">Tap to see Pricing</span>
                                <span className="text-sm text-foreground/70 font-medium hidden md:block">Hover for Pricing</span>
                            </div>
                        </div>

                        {/* Back of Card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl border border-primary/50 group-hover:glow-box">
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30"></div>
                            </div>

                            {/* Content on Back */}
                            <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center text-center">
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide drop-shadow-md">{pkg.name}</h3>

                                <div className="my-6">
                                    <span className="text-4xl font-extrabold text-primary glow-text drop-shadow-md">₹{pkg.price}</span>
                                    <span className="text-white/80 font-medium ml-1">{pkg.billing}</span>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedPackage(selectedPackage === index ? null : index);
                                        // Scroll to the respective details section
                                        setTimeout(() => {
                                            const isMobile = window.innerWidth < 768;
                                            const targetId = isMobile ? `mobile-details-premium-${index}` : 'desktop-details-premium';
                                            const element = document.getElementById(targetId);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
                                        }, 100);
                                    }}
                                    className="px-6 py-3 bg-primary text-black font-bold rounded-full hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-primary/50 flex items-center gap-2 mt-auto z-20 pointer-events-auto"
                                >
                                    See Details <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Expanded Details Section (Shown only below the currently selected card on small screens) */}
            {packages.map((pkg, index) => (
                <div
                    id={`mobile-details-premium-${index}`}
                    key={`mobile-details-${pkg.id}`}
                    className={`w-full md:hidden transition-all duration-500 origin-top overflow-hidden mt-6 ${selectedPackage === index ? "max-h-[2000px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
                        }`}
                >
                    <div className="bg-surface/90 backdrop-blur-xl border border-primary/30 rounded-3xl p-6 relative shadow-2xl flex flex-col gap-8">
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedPackage(null); }}
                            className="absolute top-4 right-4 p-2 rounded-full bg-surface-border text-muted hover:text-foreground hover:bg-primary/20 transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col items-center text-center pt-8">
                            <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 border border-surface-border relative">
                                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                            </div>

                            <h3 className="text-2xl font-extrabold text-foreground mb-2">{pkg.name}</h3>

                            <div className="flex items-end justify-center gap-1 mb-6">
                                <span className="text-4xl font-bold text-primary glow-text">₹{pkg.price}</span>
                                <span className="text-muted font-medium mb-1">{pkg.billing}</span>
                            </div>

                            <Link href="/contact" className="w-full py-3 bg-primary text-black font-bold text-lg rounded-xl transition-all">
                                Select Package
                            </Link>
                        </div>

                        <div className="border-t border-surface-border pt-6">
                            <h4 className="text-xl font-bold text-foreground mb-4">What's Included</h4>
                            <div className="flex flex-col gap-3">
                                {pkg.details.map((detail, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-surface border border-surface-border">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground/90 font-medium text-base">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}


            {/* Desktop Expanded Details Section (Shown below the entire grid on medium/large screens) */}
            <div
                id="desktop-details-premium"
                className={`hidden w-full md:block max-w-5xl transition-all duration-500 origin-top overflow-hidden mt-12 ${selectedPackage !== null ? "max-h-[1000px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
                    }`}
            >
                {selectedPackage !== null && (
                    <div className="bg-surface/80 backdrop-blur-xl border border-primary/30 rounded-3xl p-8 md:p-12 relative shadow-2xl shadow-primary/10">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedPackage(null)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-surface-border text-muted hover:text-foreground hover:bg-primary/20 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                            {/* Left Column - Image & Pricing */}
                            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 border border-surface-border relative group">
                                    <img
                                        src={packages[selectedPackage].image}
                                        alt={packages[selectedPackage].name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary mb-4">
                                    <Sparkles className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Premium Care</span>
                                </div>

                                <h3 className="text-3xl font-extrabold text-foreground mb-2">{packages[selectedPackage].name}</h3>

                                <div className="flex items-end justify-center gap-1 mb-8">
                                    <span className="text-5xl font-bold text-primary glow-text">₹{packages[selectedPackage].price}</span>
                                    <span className="text-muted font-medium mb-1">{packages[selectedPackage].billing}</span>
                                </div>

                                <Link
                                    href="/contact"
                                    className="w-full py-4 bg-primary text-black font-bold text-lg rounded-xl hover:bg-foreground hover:text-background transition-all hover:glow-box"
                                >
                                    Select Package
                                </Link>
                            </div>

                            {/* Right Column - Checklist */}
                            <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-surface-border pt-8 md:pt-0 md:pl-12">
                                <h4 className="text-2xl font-bold text-foreground mb-6">What's Included</h4>

                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                    {packages[selectedPackage].details.map((detail, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-colors">
                                            <div className="mt-0.5 min-w-[24px]">
                                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                            </div>
                                            <span className="text-foreground/90 font-medium text-lg leading-relaxed">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
