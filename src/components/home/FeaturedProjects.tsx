import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/data/projects";
import { assetPath } from "@/lib/assets";

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Featured Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Signature <span className="italic text-primary">Developments</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of exceptional residences that exemplify the Aristone commitment
            to luxury, quality, and timeless design.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.name}
                    onError={(e) => {
                      e.currentTarget.src = assetPath("placeholder.svg");
                    }}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className={`
                      inline-block px-3 py-1 text-xs tracking-wider uppercase font-body
                      ${project.status === "Completed" ? "bg-primary text-primary-foreground" : ""}
                      ${project.status === "Ongoing" ? "bg-white text-charcoal" : ""}
                      ${project.status === "Upcoming" ? "bg-charcoal-light text-white" : ""}
                    `}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  {project.location}
                </p>
                <p className="font-body text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Link */}
        <AnimatedSection className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-primary hover:text-accent transition-colors group"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
