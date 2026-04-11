"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  MessageCircle,
  PhoneCall,
  ArrowUp,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Droplets
} from "lucide-react";
import { blogContent } from "./content";

export default function BlogPage() {
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Simple intersection observer logic for active section
      const sections = blogContent.sections.map(s => s.id);
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Blog Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background/90 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d390ee?q=80&w=2072&auto=format&fit=crop"
            alt="Premium Car Detailing"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 animate-fade-in">
            Expert Car Care Guide
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {blogContent.title}
          </h1>
          <p className="text-xl text-gray-300 md:px-20">
            {blogContent.subtitle}
          </p>
        </div>
      </section>

      {/* Meta Bar */}
      <div className="bg-card/50 backdrop-blur-md sticky top-20 z-30 border-y border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <User size={16} className="text-primary" />
              <span>By {blogContent.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <span>{blogContent.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span>{blogContent.readTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://wa.me/917709959881"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-semibold"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Table of Contents - Left Sidebar */}
          <aside className="lg:w-1/4 hidden lg:block sticky top-40 h-fit">
            <div className="bg-card p-6 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <BookOpen size={20} className="text-primary" />
                Table of Contents
              </h3>
              <nav className="space-y-4">
                {blogContent.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-sm block w-full transition-colors duration-200 ${activeSection === section.id
                        ? "text-primary font-bold pl-2 border-l-2 border-primary"
                        : "text-gray-400 hover:text-white pl-2 border-l-2 border-transparent"
                      }`}
                  >
                    {section.title.split(":")[0]}
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wider">Quick Contact</p>
                <div className="space-y-4">
                  <a href="tel:+917709959881" className="flex items-center gap-3 text-white hover:text-primary transition-colors">
                    <PhoneCall size={18} />
                    <span>77099 59881</span>
                  </a>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Premium Doorstep Car Detailing Nagpur. Professional care for your luxury vehicles.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Blog Content */}
          <article className="lg:w-3/4 max-w-none">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-zinc-200">
              {blogContent.sections.map((section) => (
                <div key={section.id} id={section.id} className="mb-12 last:mb-0 scroll-mt-48 transition-all duration-500">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-zinc-900 tracking-tight leading-tight">
                    {section.title}
                    <div className="mt-2 w-16 h-1 bg-primary rounded-full" />
                  </h2>

                  <div className="prose prose-zinc max-w-none text-zinc-800 leading-normal font-normal">
                    {section.content.split('\n\n').map((paragraph, idx) => {
                      // Check for headers within content
                      if (paragraph.trim().startsWith('###')) {
                        return (
                          <h3 key={idx} className="text-lg font-bold text-zinc-900 mt-8 mb-4 flex items-center gap-2">
                            <Sparkles size={16} className="text-primary" />
                            {paragraph.replace('###', '').trim()}
                          </h3>
                        );
                      }
                      if (paragraph.trim().startsWith('-')) {
                        return (
                          <ul key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4 list-none">
                            {paragraph.trim().split('\n').map((li, i) => (
                              <li key={i} className="flex items-center gap-2 bg-zinc-50 p-3 rounded-lg border border-zinc-200 hover:shadow-sm">
                                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                                <span className="text-zinc-900 font-bold text-[12px]">{li.replace('-', '').trim()}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={idx} className="mb-4 last:mb-0 whitespace-pre-line text-[12px] text-zinc-700 leading-normal">
                          {paragraph.trim()}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section - Scaled down for 12px context */}
            <div className="mt-12 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent p-10 md:p-16 rounded-[2rem] border border-primary/30 text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary),0.2),transparent)] pointer-events-none" />
              <Sparkles className="mx-auto mb-6 text-primary animate-pulse" size={48} />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">Ready to Give Your Car<br />the Attention it Deserves?</h2>
                <p className="text-[14px] md:text-[16px] text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Join 1000+ satisfied luxury car owners in Nagpur. Experience the Rediance Car Care Services premium doorstep service and witness the showroom shine today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="tel:+917709959881"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl transition-all font-bold text-lg shadow-[0_10px_30px_rgba(var(--primary),0.4)] hover:-translate-y-1"
                  >
                    <PhoneCall size={18} />
                    Call Now: 77099 59881
                  </Link>
                  <Link
                    href="https://wa.me/917709959881"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-xl transition-all font-bold text-lg shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:-translate-y-1"
                  >
                    <MessageCircle size={18} />
                    Book WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Floating Action Button for Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-2xl hover:scale-110 transition-all animate-bounce"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
