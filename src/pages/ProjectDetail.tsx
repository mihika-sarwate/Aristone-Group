import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AmenitiesSection } from "@/components/project/AmenitiesSection";
import { LocationSection } from "@/components/project/LocationSection";
import { BrochureButton } from "@/components/project/BrochureButton";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft, MapPin, Building2, Users, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const projectIndex = projects.findIndex((p) => p.id === id);

  const stockGalleryPool = [
    "/images/projects/stock-01.jpg",
    "/images/projects/stock-02.jpg",
    "/images/projects/stock-03.jpg",
    "/images/projects/stock-04.jpg",
    "/images/projects/stock-05.jpg",
    "/images/projects/stock-06.jpg",
    "/images/projects/stock-07.jpg",
    "/images/projects/stock-08.jpg",
    "/images/projects/stock-09.jpg",
    "/images/projects/stock-10.jpg",
    "/images/projects/stock-11.jpg",
    "/images/projects/stock-12.jpg",
    "/images/projects/stock-13.jpg",
    "/images/projects/stock-14.jpg",
    "/images/projects/stock-15.jpg",
    "/images/projects/stock-16.jpg",
  ];

  const generatedGallery = [
    stockGalleryPool[(projectIndex + 1) % stockGalleryPool.length],
    stockGalleryPool[(projectIndex + 5) % stockGalleryPool.length],
    stockGalleryPool[(projectIndex + 9) % stockGalleryPool.length],
  ];
  const floorPlanPool = [
    "/floorplans/plan-01.svg",
    "/floorplans/plan-02.svg",
    "/floorplans/plan-03.svg",
    "/floorplans/plan-04.svg",
    "/floorplans/plan-05.svg",
    "/floorplans/plan-06.svg",
  ];
  const [activeFloorPlan, setActiveFloorPlan] = useState<string | null>(null);
  const [activeConfig, setActiveConfig] = useState<string | null>(null);
  const [isHoveringConfig, setIsHoveringConfig] = useState(false);
  const [isHoveringPreview, setIsHoveringPreview] = useState(false);
  const [expandedPlan, setExpandedPlan] = useState<{ src: string; config: string } | null>(null);
  const floorPlanCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!activeFloorPlan) return;
    if (!isHoveringConfig && !isHoveringPreview) {
      setActiveFloorPlan(null);
      setActiveConfig(null);
    }
  }, [isHoveringConfig, isHoveringPreview, activeFloorPlan]);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-primary hover:underline">
              View All Projects
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.name}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container-luxury w-full pb-16 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-body text-sm tracking-wider uppercase">Back to Projects</span>
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`inline-block px-4 py-1.5 text-xs tracking-wider uppercase font-body ${
                  project.status === "Completed"
                    ? "bg-primary text-primary-foreground"
                    : project.status === "Ongoing"
                    ? "bg-white text-charcoal"
                    : "bg-charcoal-light text-white"
                }`}
              >
                {project.status}
              </span>
              <span className="text-white/60 font-body text-sm">{project.region}</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-white mb-4">
              {project.name}
            </h1>
            
            <div className="flex items-center gap-2 text-white/80 mb-8">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-body">{project.location}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm tracking-wider uppercase"
              >
                <Link to={`/enquire?project=${encodeURIComponent(project.name)}`}>Enquire Now</Link>
              </Button>
              <BrochureButton 
                brochureUrl={project.brochureUrl} 
                projectName={project.name}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection>
              <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                Overview
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
                About <span className="italic text-primary">{project.name}</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {project.fullDescription || project.description}
              </p>
              
              {project.configurations && (
                <div className="mb-8 relative" ref={floorPlanCardRef}>
                  <h3 className="font-display text-xl mb-4 text-foreground">Available Configurations</h3>
                  <div
                    className="flex flex-wrap gap-3"
                    onMouseEnter={() => setIsHoveringConfig(true)}
                    onMouseLeave={() => setIsHoveringConfig(false)}
                  >
                    {project.configurations.map((config) => (
                      <button
                        key={config}
                        type="button"
                        onMouseEnter={() => {
                          const randomPlan = floorPlanPool[Math.floor(Math.random() * floorPlanPool.length)];
                          setActiveFloorPlan(randomPlan);
                          setActiveConfig(config);
                        }}
                        onClick={() => {
                          const selectedPlan =
                            activeConfig === config && activeFloorPlan
                              ? activeFloorPlan
                              : floorPlanPool[Math.floor(Math.random() * floorPlanPool.length)];
                          setActiveFloorPlan(selectedPlan);
                          setActiveConfig(config);
                          setExpandedPlan({ src: selectedPlan, config });
                        }}
                        className="px-4 py-2 border border-primary/30 text-foreground font-body text-sm hover:border-primary hover:bg-primary/5 transition-colors"
                      >
                        {config}
                      </button>
                    ))}
                  </div>

                  {activeFloorPlan && (
                    <div
                      className="absolute top-full mt-4 left-0 z-30 w-[320px] md:w-[380px] bg-white border border-border shadow-premium rounded-lg p-3"
                      onMouseEnter={() => setIsHoveringPreview(true)}
                      onMouseLeave={() => setIsHoveringPreview(false)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-body text-xs tracking-wider uppercase text-primary">
                          Floor Plan Preview
                        </p>
                        <p className="font-body text-xs text-muted-foreground">{activeConfig}</p>
                      </div>
                      <img
                        src={activeFloorPlan}
                        alt={`${activeConfig || "Project"} floor plan`}
                        onClick={() => {
                          if (!activeFloorPlan || !activeConfig) return;
                          setExpandedPlan({ src: activeFloorPlan, config: activeConfig });
                        }}
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                        className="w-full aspect-[4/3] object-cover border border-border cursor-zoom-in"
                      />
                      <p className="font-body text-[11px] text-muted-foreground mt-2">
                        Hover on chips or this preview to keep it open. Click to enlarge.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {project.height && (
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-secondary/50 p-6 rounded-lg border border-border"
                  >
                    <Building2 className="w-8 h-8 text-primary mb-4" />
                    <span className="font-display text-3xl text-primary block mb-1">
                      {project.height}
                    </span>
                    <span className="font-body text-sm text-muted-foreground">Height</span>
                  </motion.div>
                )}
                
                {project.units && (
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-secondary/50 p-6 rounded-lg border border-border"
                  >
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <span className="font-display text-3xl text-primary block mb-1">
                      {project.units}
                    </span>
                    <span className="font-body text-sm text-muted-foreground">Total Units</span>
                  </motion.div>
                )}
                
                {project.area && (
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-secondary/50 p-6 rounded-lg border border-border col-span-2"
                  >
                    <Ruler className="w-8 h-8 text-primary mb-4" />
                    <span className="font-display text-3xl text-primary block mb-1">
                      {project.area}
                    </span>
                    <span className="font-body text-sm text-muted-foreground">Total Area</span>
                  </motion.div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-12">
            <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Visual Tour
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Project <span className="italic text-primary">Gallery</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(project.galleryImages?.length ? project.galleryImages : generatedGallery).map((image, index) => (
              <AnimatedSection key={`${project.id}-gallery-${index}`} delay={index * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-lg border border-border bg-background">
                  <img
                    src={image}
                    alt={`${project.name} gallery ${index + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section - Project Specific */}
      <AmenitiesSection amenities={project.amenities} />

      {/* Location Section - Project Specific */}
      <LocationSection
        locationAdvantages={project.locationAdvantages}
        mapImage={project.mapImage}
        projectName={project.name}
      />

      {/* CTA Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury text-center">
          <AnimatedSection>
            <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Interested?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Start Your <span className="italic text-primary">Journey</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-10">
              Take the first step towards owning your dream home at {project.name}.
              Our team is ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm tracking-wider uppercase"
              >
                <Link to={`/enquire?project=${encodeURIComponent(project.name)}`}>Schedule a Visit</Link>
              </Button>
              <BrochureButton 
                brochureUrl={project.brochureUrl} 
                projectName={project.name}
                variant="outline"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {expandedPlan && (
        <div
          className="fixed inset-0 z-[80] bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setExpandedPlan(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-lg border border-border shadow-premium p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close floor plan"
              onClick={() => setExpandedPlan(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full border border-border bg-white text-foreground hover:bg-secondary transition-colors text-xl leading-none z-10"
            >
              ×
            </button>
            <div className="flex items-center justify-between mb-3 pr-12">
              <p className="font-body text-xs tracking-wider uppercase text-primary">Floor Plan</p>
              <p className="font-body text-sm text-muted-foreground">{expandedPlan.config}</p>
            </div>
            <img
              src={expandedPlan.src}
              alt={`${expandedPlan.config} floor plan`}
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
              className="w-full max-h-[80vh] object-contain border border-border"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProjectDetail;
