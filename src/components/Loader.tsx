"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Loader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1200); // 1.2s loader on every page change
        return () => clearTimeout(timer);
    }, [pathname]);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center transition-opacity duration-500"
            style={{ opacity: loading ? 1 : 0 }}
        >
            {/* Logo */}
            <div className="animate-pulse mb-8">
                <img
                    src="/logo.png"
                    alt="Rediance Car Care Services"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-contain drop-shadow-[0_0_30px_rgba(255,0,0,0.4)]"
                />
            </div>

            {/* Brand Name */}
            <h1 className="text-primary text-xl md:text-2xl font-extrabold tracking-wider mb-8 animate-fade-in">
                Rediance Car Care
            </h1>

            {/* Spinner */}
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin" />
            </div>
        </div>
    );
}
