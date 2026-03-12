import { Metadata } from 'next';
import Link from 'next/link';
import { Check, Info } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Car Wash Packages & Detailing Pricing in Nagpur',
    description: 'View our transparent and affordable pricing plans for doorstep car washing, interior detailing, and ceramic coating in Nagpur. Subscribe for regular washes.',
    keywords: ['car wash price nagpur', 'car detailing packages nagpur', 'monthly car wash subscription nagpur', 'ceramic coating cost nagpur']
};

const packages = [
    {
        name: 'Basic Wash',
        price: '₹499',
        duration: '45 Mins',
        description: 'Great for weekly maintenance to keep your car looking fresh.',
        popular: false,
        features: [
            'Exterior high-pressure wash',
            'Foam bath & hand wash',
            'Tyre cleaning and polish',
            'Glass cleaning (outside)',
            'Basic interior vacuuming'
        ]
    },
    {
        name: 'Monthly Subscription',
        price: '₹999',
        duration: '4 Washes/Month',
        description: 'Keep your car pristine all month long at an unbeatable value.',
        popular: false,
        features: [
            '4 Basic Washes per month',
            'Consistent scheduled slots',
            '1 Wax Top-up included',
            'Priority booking access',
            'Cancel anytime'
        ]
    },
    {
        name: 'Interior Detail',
        price: '₹1499',
        duration: '3-4 Hours',
        description: 'A deep clean of the cabin to restore the fresh car feeling.',
        popular: true,
        features: [
            'Everything in Basic Wash',
            'Seat shampoo/dry cleaning',
            'Roof lining cleaning',
            'Dashboard & trim polish',
            'Odor removal treatment',
            'AC vent sanitization'
        ]
    },
    {
        name: 'Full Detailing',
        price: '₹2499',
        duration: '6-8 Hours',
        description: 'The ultimate inside-out transformation for your vehicle.',
        popular: false,
        features: [
            'Everything in Interior Detail',
            'Engine bay wash',
            'Exterior paint decontamination',
            '1-step machine polish/wax',
            'Water spot removal from trims',
            'Long-lasting tyre gel'
        ]
    }
];

export default function PackagesPage() {
    return (
        <div className="bg-background min-h-screen py-20 relative">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
                    alt="Car Cleaning Packages"
                    className="w-full h-[60vh] object-cover opacity-5 dark:opacity-20 mask-image-b"
                    style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}
                />
            </div>
            <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-green-400/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">Pricing <span className="text-primary">Packages</span></h1>
                    <p className="text-muted max-w-2xl mx-auto text-lg">Transparent pricing. No hidden fees. We bring our own water and electricity (optional) directly to you.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-surface rounded-3xl border transition-all duration-300 flex flex-col
                ${pkg.popular ? 'border-primary shadow-[0_0_30px_rgba(0,240,255,0.15)] transform md:-translate-y-4' : 'border-surface-border hover:border-primary/50'}`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-primary text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="p-8 pb-0">
                                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-extrabold text-primary">{pkg.price}</span>
                                    {pkg.name === 'Monthly Subscription' && <span className="text-muted">/mo</span>}
                                </div>
                                <div className="text-sm font-medium text-muted mb-6 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Est. time: {pkg.duration}
                                </div>
                                <p className="text-muted text-sm font-light leading-relaxed mb-8 h-10">{pkg.description}</p>
                            </div>

                            <div className="p-8 pt-0 flex-grow flex flex-col">
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-primary shrink-0 fill-current/10" />
                                            <span className="text-muted text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                                    className={`w-full py-3.5 rounded-xl font-bold text-center transition-all ${pkg.popular
                                        ? 'bg-primary text-white hover:bg-foreground hover:text-background dark:text-black glow-box'
                                        : 'bg-surface-hover text-foreground hover:bg-primary/20 hover:text-primary'
                                        }`}
                                >
                                    Book This Package
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 border border-surface-border bg-surface/50 rounded-2xl p-6 flex gap-4 items-start max-w-3xl mx-auto">
                    <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-foreground font-semibold mb-2">Note on pricing</h4>
                        <p className="text-muted text-sm font-light">
                            Prices shown are base rates for hatchbacks and compact sedans. Prices may vary slightly for larger vehicles (SUVs, MUVs) due to the extra time and materials required. Final quote will be provided before starting work.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
