import { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, Sparkles, ShieldCheck, Wrench, Settings, Car } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Car Detailing & Washing Services in Nagpur',
    description: 'Explore our range of premium doorstep car detailing services in Nagpur: Foam Wash, Interior Deep Cleaning, Ceramic Coating, and Paint Correction. Serving Dharampeth, Manish Nagar, and all of Nagpur.',
    keywords: ['car washing services nagpur', 'doorstep car wash nagpur', 'interior detailing nagpur', 'ceramic coating nagpur', 'car scratch removal nagpur']
};

const services = [
    {
        icon: <Droplets className="w-10 h-10 text-primary" />,
        title: 'Doorstep Car Cleaning',
        description: 'A comprehensive exterior wash using high-quality shampoos, microfibers, and safe techniques—right at your doorstep.',
        price: 'From ₹499'
    },
    {
        icon: <Sparkles className="w-10 h-10 text-primary" />,
        title: 'Interior Deep Cleaning',
        description: 'Thorough vacuuming, stain removal, seat dry-cleaning, roof cleaning, and odor elimination.',
        price: 'From ₹1499'
    },
    {
        icon: <Settings className="w-10 h-10 text-primary" />,
        title: 'Dashboard Polish',
        description: 'We clean and dress your dashboard and door panels to protect against UV rays and restore their original matte or gloss finish.',
        price: 'Included in Interior/Detailing'
    },
    {
        icon: <Wrench className="w-10 h-10 text-primary" />,
        title: 'Tyre Polish & Alloy Cleaning',
        description: 'Deep rim cleaning to remove brake dust and a long-lasting non-sling dressing for your tyres.',
        price: 'Included in Standard Wash'
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: 'Ceramic Coating',
        description: 'Premium 9H ceramic coating layer offering months or years of hydrophobic protection and insane gloss.',
        price: 'Enquire for Price'
    },
    {
        icon: <Car className="w-10 h-10 text-primary" />,
        title: 'Full Car Detailing',
        description: 'Paint correction, exterior polish, deep interior clean, engine bay wash, and sealant application. The ultimate package.',
        price: 'From ₹2499'
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-background min-h-screen py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
                    alt="Car Detailing Polishing"
                    className="w-full h-full object-cover opacity-[0.03] dark:opacity-10"
                />
            </div>

            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-700/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-500/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">Our Premium Services</h1>
                    <p className="text-muted max-w-2xl mx-auto text-lg">We bring the best equipment and products right to your home in Nagpur to ensure your car gets unparalleled treatment.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div key={index} className="bg-surface/80 backdrop-blur border border-surface-border p-8 rounded-2xl hover:border-primary/50 glow-box-hover transition-all duration-500 flex flex-col h-full">
                            <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
                                {service.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-4 tracking-wide">{service.title}</h2>
                            <p className="text-muted mb-8 flex-grow leading-relaxed font-light">{service.description}</p>

                            <div className="mt-auto pt-6 border-t border-surface-border flex items-center justify-between">
                                <span className="text-muted font-medium">{service.price}</span>
                                <Link href="/contact" className="text-primary hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider">
                                    Book Slot →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-gradient-to-r from-surface to-surface-border border border-primary/20 rounded-3xl p-10 lg:p-16 max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-foreground mb-4">Not sure what your car needs?</h3>
                        <p className="text-muted mb-8 max-w-xl mx-auto">Get in touch with our experts. We'll assess your vehicle's condition and recommend the best service package.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-foreground hover:text-background hover:glow-box transition-all">
                                Contact Us via WhatsApp
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
