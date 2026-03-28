"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Additional Services", href: "/additional-services" },
        { name: "Blog", href: "/blog" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-surface border-b border-surface-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <img
                            src="/logo.png"
                            alt="Carrz Car Care Logo"
                            className="h-10 w-auto object-contain transition-all duration-300"
                        />
                        <span className="font-bold text-lg tracking-tight text-foreground">Carrz Car Care</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-muted hover:text-primary transition-colors duration-300 font-medium text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* <Link
                            href="/contact"
                            className="px-5 py-2 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark transition-all duration-300 text-sm"
                        >
                            Log in / Sign up
                        </Link> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* <Link
                            href="/contact"
                            className="text-sm font-semibold text-primary"
                        >
                            Login
                        </Link> */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 -mr-2 rounded-md text-foreground focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden bg-surface border-t border-surface-border shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted/10 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
