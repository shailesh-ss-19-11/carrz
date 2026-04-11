"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Check, Info, Droplets, Shield, Sparkles } from 'lucide-react';

const washPackages = [
    {
        id: 'basic',
        name: 'Basic Pressure Wash',
        price: '₹599',
        description: 'High-pressure water deep cleaning to remove mud and grime.',
        popular: false,
        features: [
            '1 Time High Pressure Exterior Wash',
            'Foam Shampoo Wash',
            'Interior Vacuum Cleaning',
            'Dashboard Polish',
            'Tyre Polish',
            'Greasing Service'
        ]
    },
    {
        id: 'elite',
        name: 'Elite Pressure Wash (Monthly 2 times)',
        price: '₹1099',
        description: 'Complete inside-out pressure washing and deep vacuuming.',
        popular: true,
        features: [
            'High Pressure Exterior Wash(2 times)',
            'Foam Shampoo Washing',
            'Interior Vacuum Cleaning',
            'Dashboard Polish',
            'Underbody Cleaning',
            'Tyre Polish'
        ]
    },
    {
        id: 'premium',
        name: 'Premium Pressure Wash (Monthly 3 times)',
        price: '₹1499',
        description: 'Complete inside-out pressure washing and deep vacuuming.',
        popular: false,
        features: [
            'High Pressure Exterior Wash(3 times)',
            'Foam Shampoo Washing',
            'Interior Vacuum Cleaning',
            'Dashboard Polish',
            'Underbody Cleaning',
            'Tyre Polish'
        ]
    }
];

export default function PressureWashPage() {
    const [selectedPackage, setSelectedPackage] = useState(washPackages[1]); // Default to Elite

    return (
        <div className="bg-background min-h-screen relative overflow-hidden">
            {/* Hero Section */}
            <div className="relative py-16 md:py-24 lg:py-32 overflow-hidden border-b border-surface-border">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2070&auto=format&fit=crop"
                        alt="Pressure Wash"
                        className="w-full h-full object-cover opacity-10 dark:opacity-20 mask-image-b"
                        style={{ maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20 backdrop-blur-sm">
                        <Droplets className="w-4 h-4" />
                        Deep Cleaning Power
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary mb-6 tracking-tight">Pressure <br className="hidden md:block" /> Wash Packages</h1>
                    <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">Experience a powerful, deep-cleaning water pressure wash at your doorstep. We efficiently lift stubborn mud, dust, and grime to give your car a beautifully restored look.</p>
                </div>
            </div>

            {/* Packages Section */}
            <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Choose Your Plan</h2>
                    <p className="text-muted max-w-xl mx-auto text-lg font-light">Select a package to view its detailed offerings below.</p>
                </div>

                {/* Package Cards (Triggers) */}
                <div className="w-full overflow-x-auto pt-6 pb-10 mb-6 md:mb-16 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar scroll-smooth snap-x snap-mandatory">
                    <div className="flex sm:grid sm:grid-cols-3 gap-4 md:gap-6 w-fit sm:w-full max-w-4xl mx-auto">
                        {washPackages.map((pkg) => {
                            const isSelected = selectedPackage.id === pkg.id;
                            return (
                                <button
                                    key={pkg.id}
                                    onClick={() => setSelectedPackage(pkg)}
                                    className={`relative w-[280px] sm:w-auto text-left p-6 md:p-8 rounded-[2rem] border transition-all duration-300 flex flex-col items-center text-center group focus:outline-none min-h-[160px] md:min-h-[220px] shrink-0 snap-center
                                        ${isSelected
                                            ? 'border-primary bg-gradient-to-b from-surface to-primary/5 shadow-[0_10px_30px_rgba(0,240,255,0.2)] md:-translate-y-2 scale-[1.02]'
                                            : 'border-surface-border bg-surface/80 hover:bg-surface hover:border-primary/50 hover:shadow-xl hover:-translate-y-1'
                                        }`}
                                >
                                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full transition-opacity duration-500 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
                                    </div>

                                    {pkg.popular && (
                                        <div className="absolute top-0 right-0 bg-primary/20 text-primary border-b border-l border-primary/30 text-[10px] font-black px-4 py-1.5 rounded-tr-[2rem] rounded-bl-[1.5rem] uppercase tracking-widest backdrop-blur-sm shadow-sm z-20">
                                            Value Pick
                                        </div>
                                    )}

                                    <div className="flex flex-col items-center justify-between h-full z-10 w-full relative">
                                        <div className="w-full flex justify-start absolute top-0 -ml-2 -mt-2">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isSelected ? 'border-primary bg-primary scale-110 shadow-sm' : 'border-surface-border group-hover:border-primary/50'}`}>
                                                {isSelected && <div className="w-2 h-2 rounded-full bg-black" />}
                                            </div>
                                        </div>

                                        <div className={`mb-4 mt-2 p-3.5 rounded-2xl border transition-colors ${isSelected ? 'bg-primary/20 border-primary/30 text-primary' : 'bg-background border-surface-border text-foreground/70 group-hover:text-primary group-hover:border-primary/30'}`}>
                                            <Droplets className="w-8 h-8 md:w-10 md:h-10" />
                                        </div>

                                        <div className="w-full flex flex-col items-center mt-2">
                                            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight mb-2 transition-colors ${isSelected ? 'text-primary drop-shadow-[0_2px_10px_rgba(0,240,255,0.4)]' : 'text-foreground group-hover:text-primary/80'}`}>
                                                {pkg.name}
                                            </h3>

                                            <div className="flex flex-col items-center mt-auto">
                                                <span className={`text-2xl sm:text-3xl md:text-4xl font-black transition-colors ${isSelected ? 'text-foreground' : 'text-foreground/80'}`}>{pkg.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Detailed Package View (Animated Appearance) */}
                <div key={selectedPackage.id} className="max-w-4xl mx-auto bg-surface/80 backdrop-blur-md rounded-[2.5rem] border border-surface-border p-8 md:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">

                        {/* Detail Header */}
                        <div className="md:w-1/3 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-surface-border text-xs font-semibold text-muted mb-6 w-max">
                                Selected Package
                            </div>
                            <h3 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-tight">
                                {selectedPackage.name}
                            </h3>
                            <p className="text-muted text-base font-light leading-relaxed mb-8">
                                {selectedPackage.description}
                            </p>

                            <Link
                                href={`/contact?package=${encodeURIComponent(selectedPackage.name)}`}
                                className="w-full py-4 rounded-xl font-bold text-center transition-all duration-300 bg-primary text-black hover:bg-foreground hover:text-background glow-box shadow-[0_10px_20px_rgba(0,240,255,0.2)] hover:shadow-[0_10px_30px_rgba(0,240,255,0.4)]"
                            >
                                Book Now — {selectedPackage.price}
                            </Link>
                        </div>

                        {/* Detail Features List */}
                        <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-surface-border pt-8 md:pt-0 md:pl-16">
                            <h4 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-primary" />
                                What's included in {selectedPackage.name}
                            </h4>
                            <ul className="space-y-4">
                                {selectedPackage.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4 animate-in slide-in-from-right-4 fade-in duration-500 fill-mode-both" style={{ animationDelay: `${idx * 100}ms` }}>
                                        <div className="mt-1 bg-primary/10 rounded-full p-1.5 shrink-0">
                                            <Check className="w-4 h-4 text-primary stroke-[3]" />
                                        </div>
                                        <span className="text-foreground/90 font-medium text-base leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Important Information Accordion/Box */}
                <div className="mt-24 border border-surface-border bg-gradient-to-r from-surface to-background rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row gap-6 items-start md:items-center max-w-4xl mx-auto shadow-sm">
                    <div className="bg-primary/10 p-4 rounded-2xl shrink-0">
                        <Info className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h4 className="text-xl text-foreground font-bold mb-3 tracking-tight">Important Information</h4>
                        <p className="text-muted text-sm md:text-base font-light leading-relaxed">
                            Prices are applicable for hatchback and compact sedan cars. SUVs, MUVs, and luxury vehicles might incur a small extra charge due to the increased surface area. Pressure washing requires a minimal amount of space and a verified power and water source at your location.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
