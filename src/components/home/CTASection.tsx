import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/assets";

const WHATSAPP_MESSAGE = encodeURIComponent("Hello, I would like to enquire about one of your projects!");

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={assetPath("images/projects/stock-06.jpg")}
          alt="Luxury interior"
          onError={(e) => {
            e.currentTarget.src = assetPath("placeholder.svg");
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury px-6 md:px-12 text-center">
        <AnimatedSection>
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Start Your Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            Ready to Experience{" "}
            <span className="italic text-primary">Extraordinary</span> Living?
          </h2>
          <p className="font-body text-white/70 max-w-2xl mx-auto mb-10">
            Connect with our team to discover the perfect residence that matches your aspirations.
            Your dream home awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm tracking-wider uppercase"
            >
              <Link to="/enquire">Schedule a Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-6 text-sm tracking-wider uppercase"
            >
              <a href={`https://wa.me/918779282801?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
