import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/assets";

export function AboutTeaser() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <img
                src={assetPath("images/projects/stock-12.jpg")}
                alt="Aristone building"
                onError={(e) => {
                  e.currentTarget.src = assetPath("placeholder.svg");
                }}
                className="w-full aspect-[4/5] max-h-[68svh] object-cover mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 md:p-8">
                <span className="font-display text-4xl md:text-5xl font-semibold block">25+</span>
                <span className="font-body text-xs tracking-wider uppercase">Years of Excellence</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              About Aristone
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              <span className="italic text-primary">To be updated soon</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Our story is currently being written. Please check back later for more information about Aristone Group.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-sm tracking-wider uppercase mt-4"
            >
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
