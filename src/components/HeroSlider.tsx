"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { MessageCircle } from "lucide-react";

export default function HeroSlider() {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
            title: "Showroom Shine",
            subtitle: "Delivered to Your Door.",
            message: "Hello Carrz Care! Can we get more info about your Showroom Shine service?",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1518987048-93e29699e79a?q=80&w=2070&auto=format&fit=crop",
            title: "Premium Ceramic Coating",
            subtitle: "Long-lasting Protection & Gloss.",
            message: "Hello Carrz Care! Can we get more info about Ceramic Coating?",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1600539714886-f40ceb681cb9?q=80&w=2070&auto=format&fit=crop",
            title: "Deep Interior Detailing",
            subtitle: "Spotless inside Out.",
            message: "Hello Carrz Care! Can we get more info about Interior Detailing?",
        },
    ];

    return (
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl relative group">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-[250px] sm:h-[400px] md:h-[500px] w-full mt-4"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="p-2 sm:p-4 pb-10">
                        <div className="relative w-full h-full cursor-pointer rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,0,0,0.15)] ring-1 ring-black/5 dark:ring-white/10 group-hover:shadow-[0_8px_30px_rgba(255,0,0,0.3)] transition-all duration-300" onClick={() => {
                            const url = `https://wa.me/917709959881?text=${encodeURIComponent(slide.message)}`;
                            window.open(url, "_blank");
                        }}>
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </SwiperSlide>
                ))}
                {/* Custom Navigation */}
                <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div className="swiper-button-next-custom absolute top-1/2 right-4 z-10 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </Swiper>
            {/* Global override for swiper pagination dots */}
            <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: var(--primary-color) !important;
          opacity: 1;
        }
      `}</style>
        </div>
    );
}
