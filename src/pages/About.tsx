import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { leadership } from "@/data/leadership";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/projects/stock-10.jpg" alt="About Aristone" onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4 block">Our Story</span>
          <h1 className="font-display text-5xl md:text-7xl font-light">About <span className="italic text-primary">Aristone</span></h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">A Legacy of <span className="italic text-primary">Excellence</span></h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">Founded in 1998, Aristone Group has been reshaping Mumbai's skyline with landmark developments that blend architectural innovation with timeless elegance. Our journey began with a simple belief: every family deserves a home that inspires.</p>
            <p className="font-body text-muted-foreground leading-relaxed">Today, with over 50 projects delivered and 15 million square feet developed, we continue to set new standards in luxury real estate, creating living spaces that become cherished family legacies.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">Leadership</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">The Visionaries <span className="italic text-primary">Behind</span> Aristone</h2>
          </AnimatedSection>
          <div className="space-y-20">
            {leadership.map((leader, index) => (
              <AnimatedSection key={leader.id} direction={index % 2 === 0 ? "left" : "right"} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <img src={leader.image} alt={leader.name} onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }} className="w-full aspect-[4/5] object-cover" />
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="font-body text-sm tracking-wider uppercase text-primary">{leader.role}</span>
                    <h3 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-6">{leader.name}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
