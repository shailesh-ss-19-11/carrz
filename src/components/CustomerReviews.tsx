"use client";

import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
    {
        name: "Rahul Sharma",
        role: "Verified Customer",
        content: "Absolutely transformed my car! The attention to detail is unmatched, and the team provided top-tier service right at my doorstep. Highly recommended.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
        name: "Amit Patel",
        role: "Premium Detailing",
        content: "The coating gave my vehicle a showroom shine. It's been months, and water still beads off effortlessly. Best investment for my car.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
    },
    {
        name: "Neha Kapoor",
        role: "Verified Customer",
        content: "I booked their deep interior cleaning, and my 5-year-old car feels brand new again. Every stain and odor is completely gone. Incredible work!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
        name: "Sandeep Singh",
        role: "Paint Protection Film",
        content: "I was worried about scratches on my new SUV. The PPF they installed is basically invisible and has already saved my paint from a stray shopping cart!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
    }
];

export default function CustomerReviews() {
    return (
        <div className="pt-10 md:pt-16 border-t border-surface-border mt-10 md:mt-16">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-2">What Our <span className="text-primary">Customers Say</span></h2>
                <p className="text-muted text-sm md:text-base font-light">Join thousands of satisfied car owners relying on Carrz.</p>
            </div>
            
            <div className="w-full max-w-5xl mx-auto px-2 relative">
                {/* Mobile shadow fix helper container */}
                <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16 pt-2"
                    >
                        {reviews.map((review, idx) => (
                            <SwiperSlide key={idx} className="h-auto">
                                <div className="bg-background border border-surface-border rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.3)] hover:border-primary/50 transition-colors h-full flex flex-col justify-between cursor-grab active:cursor-grabbing">
                                    <div>
                                        <div className="flex items-center gap-1 mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                            ))}
                                        </div>
                                        <p className="text-muted text-sm md:text-base italic mb-6 leading-relaxed">"{review.content}"</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20" />
                                        <div>
                                            <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
                                            <p className="text-primary text-xs font-medium">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
