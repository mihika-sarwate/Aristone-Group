import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { leadership } from "@/data/leadership";
import { assetPath } from "@/lib/assets";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={assetPath("images/projects/stock-10.jpg")} alt="About Aristone" onError={(e) => { e.currentTarget.src = assetPath("placeholder.svg"); }} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4 block">Our Story</span>
          <h1 className="font-display text-5xl md:text-7xl font-light">About <span className="italic text-primary">Aristone</span></h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <AnimatedSection className="max-w-4xl mx-auto text-center py-20">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              <span className="italic text-primary">To be updated soon</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Our story is currently being written. Please check back later for more information about Aristone Group.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
