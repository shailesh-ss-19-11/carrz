"use client";

import Link from "next/link";
import { Home, Wrench, PhoneCall, AlertCircle } from "lucide-react";

export default function MobileBottomNav() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-surface-border py-2 px-6 flex justify-between items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <Link href="/" className="flex flex-col items-center gap-1 group">
                <Home className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium text-primary">Home</span>
            </Link>

            <Link href="/services" className="flex flex-col items-center gap-1 group">
                <Wrench className="w-6 h-6 text-muted group-hover:text-primary group-hover:scale-110 transition-all" />
                <span className="text-[10px] font-medium text-muted group-hover:text-primary">Services</span>
            </Link>

            {/* Floating SOS/Call Button (prominent) */}
            <div className="relative -top-6">
                <a
                    href="https://wa.me/917709959881?text=Hello%20Carrz%20Care!%20I%20need%20help%20choosing%20a%20service."
                    className="w-14 h-14 bg-transparent rounded-full flex flex-col items-center justify-center text-white shadow-[0_4px_15px_rgba(255,0,0,0.4)] border-4 border-background animate-pulse"
                >
                    <img src={"/whts-app.png"} className="w-full h-full rounded-full" />
                </a>
                <span className="text-[10px] font-bold text-[#ff4d4d] absolute -bottom-5 left-1/2 -translate-x-1/2 w-max">Whatts App</span>
            </div>

            <Link href="/contact" className="flex flex-col items-center gap-1 group">
                <AlertCircle className="w-6 h-6 text-muted group-hover:text-primary group-hover:scale-110 transition-all" />
                <span className="text-[10px] font-medium text-muted group-hover:text-primary">Support</span>
            </Link>
        </div>
    );
}
