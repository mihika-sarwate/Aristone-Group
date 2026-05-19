import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import { miraRoadProjectsList, palgharProjectsList, Project } from "@/data/projects";
import { assetPath } from "@/lib/assets";

export function LocationSelector() {
  const [selectedRegion, setSelectedRegion] = useState<"mira" | "palghar" | null>(null);

  const displayedProjects: Project[] = 
    selectedRegion === "mira" ? miraRoadProjectsList :
    selectedRegion === "palghar" ? palgharProjectsList : [];

  return (
    <section className="section-padding bg-premium-dark">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Explore Our Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
            Select Your <span className="italic text-primary">Location</span>
          </h2>
        </motion.div>

        {/* Region Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Mira Road Card */}
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedRegion(selectedRegion === "mira" ? null : "mira")}
            className={`relative overflow-hidden rounded-sm p-10 md:p-14 text-left transition-all duration-500 border group ${
              selectedRegion === "mira" 
                ? "border-primary bg-primary/10 shadow-gold-glow" 
                : "border-white/10 bg-charcoal-light/50 hover:border-primary/50 hover:bg-charcoal-light/80"
            }`}
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-primary/30" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-primary/30" />
            
            <div className="relative z-10">
              <MapPin className={`w-12 h-12 mb-6 transition-colors duration-300 ${
                selectedRegion === "mira" ? "text-primary" : "text-white/50 group-hover:text-primary/70"
              }`} />
              <h3 className="font-display text-4xl md:text-5xl text-white mb-3">Mira Road</h3>
              <p className="font-body text-lg text-white/60 mb-6">7 Premium Projects</p>
              <span className="inline-flex items-center gap-2 font-body text-sm text-primary tracking-wider uppercase">
                {selectedRegion === "mira" ? "Selected" : "View Projects"}
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                  selectedRegion !== "mira" ? "group-hover:translate-x-1" : ""
                }`} />
              </span>
            </div>
          </motion.button>

          {/* Palghar Card */}
          <motion.button
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedRegion(selectedRegion === "palghar" ? null : "palghar")}
            className={`relative overflow-hidden rounded-sm p-10 md:p-14 text-left transition-all duration-500 border group ${
              selectedRegion === "palghar" 
                ? "border-primary bg-primary/10 shadow-gold-glow" 
                : "border-white/10 bg-charcoal-light/50 hover:border-primary/50 hover:bg-charcoal-light/80"
            }`}
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-primary/30" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-primary/30" />
            
            <div className="relative z-10">
              <Building2 className={`w-12 h-12 mb-6 transition-colors duration-300 ${
                selectedRegion === "palghar" ? "text-primary" : "text-white/50 group-hover:text-primary/70"
              }`} />
              <h3 className="font-display text-4xl md:text-5xl text-white mb-3">Palghar</h3>
              <p className="font-body text-lg text-white/60 mb-6">3 Exclusive Projects</p>
              <span className="inline-flex items-center gap-2 font-body text-sm text-primary tracking-wider uppercase">
                {selectedRegion === "palghar" ? "Selected" : "View Projects"}
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                  selectedRegion !== "palghar" ? "group-hover:translate-x-1" : ""
                }`} />
              </span>
            </div>
          </motion.button>
        </div>

        {/* Filtered Projects Grid */}
        <AnimatePresence mode="wait">
          {selectedRegion && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/projects/${project.id}`}>
                      <motion.div
                        whileHover={{ y: -10 }}
                        className="group relative overflow-hidden rounded-sm"
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          onError={(e) => {
                            e.currentTarget.src = assetPath("placeholder.svg");
                          }}
                          className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`inline-block px-4 py-1.5 text-xs tracking-wider uppercase font-body ${
                            project.status === "Completed" ? "bg-primary text-primary-foreground" :
                            project.status === "Ongoing" ? "bg-white text-charcoal" : "bg-charcoal-light text-white border border-white/20"
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        
                        {/* Project Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-display text-2xl md:text-3xl text-white mb-2 group-hover:text-primary transition-colors duration-300">
                            {project.name}
                          </h3>
                          <p className="font-body text-sm text-white/70 flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            {project.location}
                          </p>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
