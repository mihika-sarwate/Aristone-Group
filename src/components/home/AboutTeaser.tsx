import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

export function AboutTeaser() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <img
                src="/images/projects/stock-12.jpg"
                alt="Aristone building"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
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
              Building Dreams,{" "}
              <span className="italic text-primary">Creating Legacies</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              For over two decades, Aristone Group has been at the forefront of luxury real estate
              development in Mumbai. We believe that a home is more than just walls and windows—it's
              a sanctuary where life's most precious moments unfold.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our commitment to exceptional quality, innovative design, and customer satisfaction
              has established us as one of the most trusted names in premium real estate.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-sm tracking-wider uppercase"
            >
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
