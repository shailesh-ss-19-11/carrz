import Link from "next/link";
import { Star, ShieldCheck, Droplets, Sparkles, MapPin, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import PremiumPackages from "@/components/PremiumPackages";
import PressurePackages from "@/components/PressurePackages";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-background">
          {/* Using a placeholder for sports car, later user will upload actual image. */}
          <img
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop"
            alt="Premium Car Detailing"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">Nagpur's #1 Doorstep Car Care</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
            Showroom Shine,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
              Delivered to Your Door.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl font-light">
            Professional doorstep car cleaning, deep interior detailing, and premium ceramic coating services in Nagpur. Quality service at your convenience.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto justify-center">
            {/* Call Now */}
            <a
              href="tel:+917709959881"
              className="px-6 py-3.5 bg-surface text-foreground border border-surface-border font-bold text-lg rounded-full hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Call Now
            </a>

            {/* WhatsApp Now */}
            <a
              href="https://wa.me/917709959881?text=Hello%20Carrz%20Care!%20I%20would%20like%20to%20book%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] text-white font-bold text-lg rounded-full hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>

            {/* Book Now */}
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-primary text-white dark:text-black font-bold text-lg rounded-full hover:bg-foreground hover:text-background dark:hover:text-background hover:glow-box glow-box transition-all duration-300 flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              Book Now
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-6 justify-center">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden bg-gray-800">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-muted mt-1">500+ Happy Customers in Nagpur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2081&auto=format&fit=crop"
            alt="Car Washing Details"
            className="w-full h-full object-cover opacity-10 dark:opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
        </div>

        <div className="absolute inset-0 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Premium Wash <span className="text-primary">Packages</span></h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">We offer a comprehensive range of car care services designed to protect and enhance your vehicle's appearance.</p>
          </div>

          <PremiumPackages />

          <div className="text-center mt-32 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Pressure Wash <span className="text-primary">Packages</span></h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">High-pressure cleaning solutions for a thoroughly refreshed exterior and underbody.</p>
          </div>

          <PressurePackages />
        </div>
      </section>

      {/* Why Choose Us & Reviews */}
      <section className="py-24 relative overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2080&auto=format&fit=crop"
            alt="Sports Car Engine"
            className="w-full h-full object-cover opacity-[0.05] dark:opacity-10 grayscale"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Why Nagpur Trusts <span className="text-primary">Carrz Care</span></h2>
              <p className="text-muted text-lg mb-8 font-light">We don't just wash cars; we restore them to their showroom glory. Our trained professionals use premium products to ensure your vehicle gets the care it deserves.</p>

              <ul className="space-y-6">
                {[
                  "100% Doorstep Convenience",
                  "Trained & Verified Professionals",
                  "Premium Imported Products Used",
                  "Water-saving Eco-friendly Wash",
                  "Transparent Pricing, No Hidden Costs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-foreground/90 font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/contact" className="px-8 py-4 bg-primary/10 text-primary border border-primary/50 font-bold rounded-full hover:bg-primary hover:text-white dark:hover:text-black hover:glow-box transition-all duration-300 inline-block">
                  Book A Slot Today
                </Link>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              {[
                { name: "Rahul Deshmukh", text: "Amazing doorstep service! My car looks like it just came out of the showroom. Very professional staff.", date: "2 days ago" },
                { name: "Sneha Patel", text: "Got the interior detailing done. Extremely satisfied with the results. They removed stains I thought would never go away.", date: "1 week ago" }
              ].map((review, idx) => (
                <div key={idx} className="bg-background p-8 rounded-2xl border border-surface-border hover:border-primary/30 transition-colors">
                  <div className="flex text-primary mb-4">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-muted italic mb-6">"{review.text}"</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground font-semibold">{review.name}</span>
                    <span className="text-muted">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-6">Serving All Across <span className="text-primary">Nagpur</span></h2>
          <p className="text-muted max-w-2xl mx-auto mb-8 font-light">
            From Dharampeth to Manish Nagar, Wardhaman Nagar to Hingna, our mobile vans cover the entirety of Nagpur city delivering top-notch car care at your doorstep.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Dharampeth', 'Ramdaspeth', 'Manish Nagar', 'Sadar', 'Wardhaman Nagar', 'Pratap Nagar', 'Seminary Hills', 'Narendra Nagar'].map(area => (
              <span key={area} className="px-5 py-2 rounded-full bg-surface border border-surface-border text-sm text-muted hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
