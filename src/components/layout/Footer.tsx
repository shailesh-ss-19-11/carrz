import Link from "next/link";
import { CarFront, Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-[#111d40] pt-16 pb-24 md:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Col */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <img
                                src="/logo.png"
                                alt="Rediance Car Care Services Logo"
                                className="rounded-full h-16 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,0,0,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.6)] transition-all duration-300"
                            />
                            <span className="font-bold text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors">Rediance Car Care Services</span>
                        </Link>
                        <p className="text-muted leading-relaxed text-sm">
                            Premium doorstep car cleaning and detailing services in Nagpur.
                            We bring the showroom shine right to your home.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-muted hover:text-primary hover:glow-box transition-all">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-muted hover:text-primary hover:glow-box transition-all">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-muted hover:text-primary hover:glow-box transition-all">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-foreground font-semibold text-lg tracking-wide mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'Packages', 'Blog', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-muted hover:text-primary transition-colors inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-foreground font-semibold text-lg tracking-wide mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {['Doorstep Cleaning', 'Interior Deep Clean', 'Ceramic Coating', 'Full Detailing'].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-muted hover:text-primary transition-colors inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h3 className="text-foreground font-semibold text-lg tracking-wide mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                <span>Nagpur, Maharashtra<br />Serving All Local Areas</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>+91 7709 959 881</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>hello@carrzcare.in</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <Clock className="h-5 w-5 text-primary shrink-0" />
                                <span>Mon-Sun: 8:00 AM - 8:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#111d40]/50 pt-12 mt-12 overflow-hidden">
                    <h3 className="text-foreground font-semibold text-lg tracking-wide mb-8">Areas We Serve in Nagpur</h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {[
                            "Manish Nagar", "Besa-Pipla", "Belatrodi", "Manewada", "Ayodhya Nagar", "Uday Nagar",
                            "Hudkeshwar", "Rameshwari", "Omkar Nagar", "Narendra Nagar", "Somalwada",
                            "Chatrapati Nagar", "Deo Nagar", "Khamla", "Sonegaon", "Jaitala",
                            "Lakshmi Nagar", "Pratap Nagar", "Trimurti Nagar", "Pandey Layout"
                        ].map((area) => (
                            <span
                                key={area}
                                className="px-3 md:px-4 py-1.5 md:py-2 bg-surface/40 hover:bg-surface/60 border border-surface-border hover:border-primary/40 text-muted hover:text-primary text-[11px] md:text-[13px] rounded-full transition-all duration-300 cursor-default whitespace-nowrap shadow-sm font-medium"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="border-t border-[#111d40] pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Rediance Car Care Services. All rights reserved.
                        <br />
                        <a href="https://wa.me/918208671941?text=Hi%20Shailesh!%20I%20saw%20your%20work%20and%20I%27m%20interested%20in%20a%20website." target="_blank" rel="noopener noreferrer" className="text-muted/70 text-xs hover:text-primary transition-colors">Designed & Developed by Shailesh Gokhale</a>
                    </p>
                    <div className="flex gap-4 text-sm text-muted">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
