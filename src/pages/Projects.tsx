import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { miraRoadProjectsList, palgharProjectsList } from "@/data/projects";
import { Link } from "react-router-dom";
import { assetPath } from "@/lib/assets";

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={assetPath("images/projects/stock-09.jpg")} alt="Projects" onError={(e) => { e.currentTarget.src = assetPath("placeholder.svg"); }} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4 block">Our Portfolio</span>
          <h1 className="font-display text-5xl md:text-7xl font-light">Signature <span className="italic text-primary">Projects</span></h1>
        </div>
      </section>

      {/* Mira Road Projects */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-12 text-center">
              Projects in <span className="italic text-primary">Mira Road</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miraRoadProjectsList.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <Link to={`/projects/${project.id}`}>
                  <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
                    <div className="relative overflow-hidden mb-6">
                      <img src={project.image} alt={project.name} onError={(e) => { e.currentTarget.src = assetPath("placeholder.svg"); }} className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className={`inline-block px-3 py-1 text-xs tracking-wider uppercase font-body mb-2 ${project.status === "Completed" ? "bg-primary text-primary-foreground" : project.status === "Ongoing" ? "bg-white text-charcoal" : "bg-charcoal-light text-white"}`}>{project.status}</span>
                        <h3 className="font-display text-2xl text-white">{project.name}</h3>
                        <p className="font-body text-sm text-white/80">{project.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="py-16 bg-background">
        <div className="container-luxury text-center">
          <div className="w-24 h-px bg-primary mx-auto mb-6" />
          <p className="font-display text-xl italic text-muted-foreground">Extending our legacy across regions</p>
          <div className="w-24 h-px bg-primary mx-auto mt-6" />
        </div>
      </div>

      {/* Palghar Projects */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-12 text-center">
              Projects in <span className="italic text-primary">Palghar</span>
            </h2>
          </AnimatedSection>
          
          {palgharProjectsList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {palgharProjectsList.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <Link to={`/projects/${project.id}`}>
                    <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
                      <div className="relative overflow-hidden mb-6">
                        <img src={project.image} alt={project.name} onError={(e) => { e.currentTarget.src = assetPath("placeholder.svg"); }} className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className={`inline-block px-3 py-1 text-xs tracking-wider uppercase font-body mb-2 ${project.status === "Completed" ? "bg-primary text-primary-foreground" : project.status === "Ongoing" ? "bg-white text-charcoal" : "bg-charcoal-light text-white"}`}>{project.status}</span>
                          <h3 className="font-display text-2xl text-white">{project.name}</h3>
                          <p className="font-body text-sm text-white/80">{project.location}</p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-display text-2xl italic text-muted-foreground">To be updated soon</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
