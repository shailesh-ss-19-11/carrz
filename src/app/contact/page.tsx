"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, PhoneCall } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Basic Wash',
        location: '',
    });

    const handleWhatsApp = () => {
        if (!formData.name || !formData.phone || !formData.location) return alert("Please fill all fields first.");
        const text = `Hello Carrz Care! 🚗✨%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service Required:* ${formData.service}%0A*Location in Nagpur:* ${formData.location}%0A%0A_Sent via website booking form._`;
        const phoneNum = "917709959881"; // Using actual WhatsApp number
        window.open(`https://wa.me/${phoneNum}?text=${text}`, '_blank');
    };

    const handleDirectWhatsApp = () => {
        const text = `Hello Carrz Care! 🚗✨%0A%0AI'm interested in booking a service.`;
        const phoneNum = "917709959881";
        window.open(`https://wa.me/${phoneNum}?text=${text}`, '_blank');
    };

    const handleEmail = () => {
        if (!formData.name || !formData.phone || !formData.location) return alert("Please fill all fields first.");
        const subject = encodeURIComponent(`New Booking Request: ${formData.service}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nService Required: ${formData.service}\nLocation in Nagpur: ${formData.location}\n\nSent via website booking form.`);
        window.location.href = `mailto:hello@carrzcare.in?subject=${subject}&body=${body}`;
    };

    const handleCall = () => {
        window.location.href = `tel:+917709959881`;
    };

    return (
        <div className="bg-background min-h-screen py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">Book Your <span className="text-primary glow-text">Slot</span></h1>
                    <p className="text-muted max-w-2xl mx-auto text-lg">We bring our detailing setup right to your doorstep. Fill out the form below and choose how you'd like to book.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Booking Form and Direct Contact */}
                    <div className="bg-surface p-8 md:p-10 rounded-3xl border border-surface-border shadow-[0_0_40px_rgba(0,0,0,0.5)]">

                        {/* Direct Contact CTAs */}
                        <div className="mb-10 pb-10 border-b border-surface-border">
                            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Fastest Way to Book</h2>
                            <div className="flex flex-col gap-4">
                                <button
                                    type="button"
                                    onClick={handleCall}
                                    className="w-full bg-primary text-black font-extrabold text-xl rounded-2xl px-6 py-5 hover:bg-white transition-all shadow-lg hover:shadow-primary/50 flex justify-center items-center gap-3 animate-pulse-slow border border-primary/50"
                                >
                                    <PhoneCall className="w-7 h-7" />
                                    Call Now
                                </button>

                                <button
                                    type="button"
                                    onClick={handleDirectWhatsApp}
                                    className="w-full bg-[#25D366] text-white font-bold text-lg rounded-xl px-6 py-4 hover:bg-[#128C7E] transition-all flex justify-center items-center gap-3"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    WhatsApp Us
                                </button>
                            </div>
                        </div>

                        <h2 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                            <Send className="w-5 h-5 text-primary" />
                            Or Fill Quick Booking Form
                        </h2>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-background border border-surface-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-background border border-surface-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="+91 77099 59881"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">Select Service</label>
                                <select
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full bg-background border border-surface-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                                >
                                    <option>Basic Wash (₹499)</option>
                                    <option>Monthly Subscription (₹999)</option>
                                    <option>Interior Detailing (₹1499)</option>
                                    <option>Full Detailing (₹2499)</option>
                                    <option>Ceramic Coating</option>
                                    <option>Custom Quote / Unsure</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">Location in Nagpur</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full bg-background border border-surface-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="E.g. Dharampeth, Manish Nagar"
                                />
                            </div>

                            <div className="pt-4 space-y-3">
                                <button
                                    type="button"
                                    onClick={handleWhatsApp}
                                    className="w-full bg-surface-hover text-foreground font-bold text-lg rounded-xl px-4 py-3 hover:bg-surface-border transition-all flex justify-center items-center gap-2 border border-surface-border"
                                >
                                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                                    Send Details via WhatsApp
                                </button>

                                <button
                                    type="button"
                                    onClick={handleEmail}
                                    className="w-full bg-surface text-foreground border border-surface-border font-bold rounded-xl px-4 py-3 hover:border-primary hover:text-primary transition-all duration-300 flex justify-center items-center gap-2"
                                >
                                    <Mail className="w-5 h-5" />
                                    Send via Email
                                </button>

                                <p className="text-xs text-center text-muted mt-4">We will contact you shortly after submitting.</p>
                            </div>
                        </form>
                    </div>

                    {/* Contact Details & Info */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-surface to-background p-8 rounded-3xl border border-surface-border">
                            <h3 className="text-xl font-bold text-foreground mb-6 border-b border-surface-border pb-4">Contact Information</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 text-muted">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-muted font-medium mb-1">Call / WhatsApp</span>
                                        <span className="text-lg">+91 7709 959 881</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 text-muted">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-muted font-medium mb-1">Email Us</span>
                                        <span className="text-lg">hello@carrzcare.in</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 text-muted">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-muted font-medium mb-1">Working Hours</span>
                                        <span className="text-lg">Mon - Sun: 8:00 AM - 8:00 PM</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-surface p-8 rounded-3xl border border-surface-border">
                            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                Service Areas in Nagpur
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['Dharampeth', 'Manish Nagar', 'Sadar', 'Wardhaman Nagar', 'New Nandanvan', 'Hingna', 'Katol Road', 'Seminary Hills'].map(area => (
                                    <span key={area} className="px-3 py-1 bg-background rounded-md text-sm text-muted border border-surface-border">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Google Map */}
                        <a href="https://maps.app.goo.gl/oXbBNDL897RSxH776" target="_blank" rel="noopener noreferrer" className="w-full h-48 bg-surface-hover rounded-3xl border border-surface-border overflow-hidden flex items-center justify-center text-muted relative hover:border-primary/50 transition-all group block">
                            <span className="z-10 bg-background/80 px-6 py-3 rounded-full backdrop-blur text-sm font-bold group-hover:bg-primary group-hover:text-black transition-all flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                Open in Google Maps
                            </span>
                            <div className="absolute inset-0 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Nagpur&zoom=12&size=600x300&maptype=roadmap')] bg-cover bg-center mix-blend-overlay group-hover:opacity-40 transition-opacity"></div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}
