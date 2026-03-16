import Link from "next/link";
import { Star, ShieldCheck, Droplets, Sparkles, MapPin, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import ServiceGrid from "@/components/ServiceGrid";
import OfferBanner from "@/components/OfferBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full">
        <HeroSlider />
      </section>

      {/* Promotional Offer Banner */}
      {/* <OfferBanner /> */}

      {/* Services Grid (GoMechanic Style) */}
      <ServiceGrid />

    </div>
  );
}
