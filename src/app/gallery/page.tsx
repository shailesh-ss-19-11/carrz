import { Metadata } from 'next';
import { Camera, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Car Detailing Portfolio & Gallery Nagpur',
    description: 'See the results! Check out our before/after photos, ceramic coating reflections, and interior detailing transformations done for customers across Nagpur.',
    keywords: ['car detailing gallery', 'ceramic coating before after', 'interior deep clean results nagpur', 'best car wash nagpur photos']
};

const images = [
    {
        src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
        alt: "Ceramic Coating Gloss",
        category: "Ceramic Coating"
    },
    {
        src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
        alt: "Interior Detailing After",
        category: "Interior Detailing"
    },
    {
        src: "https://images.unsplash.com/photo-1510419350481-3e05a3fc3a52?q=80&w=2072&auto=format&fit=crop",
        alt: "Exterior Snow Foam Wash",
        category: "Doorstep Wash"
    },
    {
        src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2183&auto=format&fit=crop",
        alt: "Sports Car After Polish",
        category: "Full Detailing"
    },
    {
        src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
        alt: "Alloy Wheel Cleaning",
        category: "Doorstep Wash"
    },
    {
        src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
        alt: "Dashboard Polish Shine",
        category: "Interior Detailing"
    }
];

export default function GalleryPage() {
    return (
        <div className="bg-background min-h-screen py-20 relative">
            <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] bg-blue-700/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <Camera className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">Our <span className="text-primary glow-text">Work</span></h1>
                    <p className="text-muted max-w-2xl mx-auto text-lg">Don't just take our word for it. See the transformations we've achieved for our clients right at their doorstep.</p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {images.map((img, idx) => (
                        <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-surface-border hover:border-primary/50 transition-colors">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">{img.category}</span>
                                <h3 className="text-foreground font-medium text-lg">{img.alt}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Before/After Section (Conceptual mockup) */}
                <div className="bg-gradient-to-r from-surface to-surface-border rounded-3xl p-8 md:p-12 border border-primary/20 flex flex-col items-center text-center relative overflow-hidden">
                    <Sparkles className="absolute top-10 right-10 text-primary w-16 h-16 opacity-10" />
                    <h2 className="text-3xl font-bold text-foreground mb-4">Trust The Process</h2>
                    <p className="text-muted max-w-xl mb-8 font-light">The difference between a dirty car and a detailed car is not just clean paint, it's protection and preservation.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
                        <div className="relative rounded-2xl overflow-hidden aspect-video border-2 border-red-500/20">
                            <div className="absolute top-4 left-4 z-10 bg-red-500 text-foreground text-xs font-bold px-3 py-1 rounded">BEFORE</div>
                            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop&grayscale=1" alt="Before" className="w-full h-full object-cover opacity-50 sepia-[.3]" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden aspect-video border-2 border-green-500/20">
                            <div className="absolute top-4 left-4 z-10 bg-green-500 text-foreground text-xs font-bold px-3 py-1 rounded">AFTER</div>
                            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" alt="After" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
