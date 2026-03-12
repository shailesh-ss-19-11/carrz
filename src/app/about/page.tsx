import { Metadata } from 'next';
import Link from 'next/link';
import { Target, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Nagpur\'s Best Doorstep Car Care Services',
    description: 'Learn about Carrz Car Care, Nagpur\'s premier doorstep car washing and detailing service. We bring the showroom shine directly to your home or office.',
    keywords: ['about carrz car care', 'best car detailing company nagpur', 'mobile car wash nagpur experts', 'car care professionals nagpur']
};

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen py-20 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-blue-700/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 md:mb-32">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">About <span className="text-primary glow-text">Carrz Care</span></h1>
                    <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                        Born out of a passion for automotive perfection, Carrz Car Care was established to provide the residents of Nagpur with unmatched mobile car detailing services.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
                    <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] border border-surface-border">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2036&auto=format&fit=crop"
                            alt="Professional Detailing"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                        <p className="text-muted text-lg mb-8 leading-relaxed font-light">
                            To redefine convenience in car care by delivering showroom-quality results directly to our clients' homes or workplaces. We believe that maintaining your vehicle shouldn't mean sacrificing your weekend at a washing center.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0 border border-surface-border text-primary">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-semibold text-lg mb-1">Uncompromising Quality</h4>
                                    <p className="text-muted text-sm">We use only pH-neutral shampoos, fresh microfiber cloths, and premium compounds.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0 border border-surface-border text-primary">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-semibold text-lg mb-1">Trained Professionals</h4>
                                    <p className="text-muted text-sm">Our team undergoes rigorous training on various paint types and detailing techniques.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0 border border-surface-border text-primary">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-semibold text-lg mb-1">Customer First Approach</h4>
                                    <p className="text-muted text-sm">Your satisfaction is our guarantee. We don't pack up until you're completely happy with the results.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-surface border border-surface-border rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Experience The Difference</h3>
                    <p className="text-muted mb-8 max-w-2xl mx-auto">Join hundreds of satisfied car owners in Nagpur who trust us with their vehicles.</p>
                    <Link href="/contact" className="inline-block px-10 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-foreground hover:text-background glow-box transition-all">
                        Book Your First Wash
                    </Link>
                </div>
            </div>
        </div>
    );
}
