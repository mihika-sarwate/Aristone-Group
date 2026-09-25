import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft, MapPin, Building2, Users, Ruler, ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/assets";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

/* ─── Palghar colour tokens ──────────────────────────────────────────
   Primary  : Royal Blue  #1B3A8C / #1a3580
   Accent   : Orange/Peach  #E07840 / #e8874a
   Surface  : Deep Blue bg  #0f2057
   ──────────────────────────────────────────────────────────────────── */

/* ── Gallery Slider ──────────────────────────────────────────────── */
function PalgharGallerySlider({ images, projectName }: { images: string[]; projectName: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true, align: "center" }} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden rounded-xl border-2 border-[#E07840]/30">
                {image === "To be updated soon" ? (
                  <div className="w-full aspect-[16/9] bg-[#1B3A8C]/20 flex items-center justify-center">
                    <span className="font-display text-2xl italic text-[#1B3A8C]/50">To be updated soon</span>
                  </div>
                ) : (
                  <img
                    src={image}
                    alt={`${projectName} gallery ${index + 1}`}
                    onError={(e) => { e.currentTarget.src = assetPath("placeholder.svg"); }}
                    className="w-full aspect-[16/9] object-cover"
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Prev */}
        <button
          onClick={() => api?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#1B3A8C] hover:bg-[#E07840] shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Next */}
        <button
          onClick={() => api?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#1B3A8C] hover:bg-[#E07840] shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </Carousel>

      {/* Dot indicators */}
      {count > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#E07840] w-6" : "bg-[#1B3A8C]/30 w-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Page ───────────────────────────────────────────────────── */
const PalgharProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Auto-play video when it scrolls into view; pause when out of view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {/* autoplay blocked */});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-[#1B3A8C] hover:underline">
              View All Projects
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const galleryImages = project.galleryImages?.length ? project.galleryImages : [];

  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] flex items-end" style={{ background: "linear-gradient(135deg, #0f2057 0%, #1B3A8C 60%, #1a3580 100%)" }}>
        <div className="absolute inset-0">
          {project.image && project.image !== "To be updated soon" ? (
            <img
              src={project.image}
              alt={project.name}
              onError={(e) => { e.currentTarget.src = assetPath("placeholder.svg"); }}
              className="w-full h-full object-cover opacity-30"
            />
          ) : null}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0f2057 0%, #1B3A8C80 50%, transparent 100%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto pb-16 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/70 hover:text-[#E07840] transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-body text-sm tracking-wider uppercase">Back to Projects</span>
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-4 py-1.5 text-xs tracking-wider uppercase font-body bg-[#E07840] text-white rounded-sm">
                {project.status}
              </span>
              <span className="text-white/60 font-body text-sm">{project.region}</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl text-white mb-4">
              {project.name}
            </h1>

            <div className="flex items-center gap-2 text-white/80 mb-8">
              <MapPin className="w-4 h-4 text-[#E07840]" />
              <span className="font-body">{project.location}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to={`/enquire?project=${encodeURIComponent(project.name)}`}
                className="inline-block px-8 py-4 text-sm tracking-wider uppercase font-body bg-[#E07840] hover:bg-[#c9642e] text-white transition-colors duration-300 rounded-sm"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO VIDEO (Hill Touch only) ────────────────────────── */}
      {project.introVideo && (
        <section className="relative overflow-hidden" style={{ background: "#0f2057" }}>
          {/* top gradient fade from hero */}
          <div className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
               style={{ background: "linear-gradient(to bottom, #0f2057, transparent)" }} />
          {/* bottom gradient fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
               style={{ background: "linear-gradient(to top, #f8f9ff, transparent)" }} />

          <video
            ref={videoRef}
            src={assetPath(project.introVideo.replace(/^\//, ""))}
            className="w-full block"
            style={{ display: "block", maxHeight: "85vh", objectFit: "cover" }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </section>
      )}

      {/* ── OVERVIEW ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#f8f9ff" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection>
              <span className="font-body text-sm tracking-[0.3em] uppercase text-[#E07840] mb-4 block">
                Overview
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#0f2057] mb-6">
                About <span className="italic text-[#1B3A8C]">{project.name}</span>
              </h2>
              <p className="font-body text-gray-600 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {project.height && (
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl border-2 border-[#1B3A8C]/20 bg-white shadow-sm"
                  >
                    <Building2 className="w-8 h-8 text-[#E07840] mb-4" />
                    <span className="font-display text-3xl text-[#1B3A8C] block mb-1">{project.height}</span>
                    <span className="font-body text-sm text-gray-500">Height</span>
                  </motion.div>
                )}
                {project.units && (
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl border-2 border-[#1B3A8C]/20 bg-white shadow-sm"
                  >
                    <Users className="w-8 h-8 text-[#E07840] mb-4" />
                    <span className="font-display text-3xl text-[#1B3A8C] block mb-1">{project.units}</span>
                    <span className="font-body text-sm text-gray-500">Total Units</span>
                  </motion.div>
                )}
                {project.area && (
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl border-2 border-[#1B3A8C]/20 bg-white shadow-sm col-span-2"
                  >
                    <Ruler className="w-8 h-8 text-[#E07840] mb-4" />
                    <span className="font-display text-3xl text-[#1B3A8C] block mb-1">{project.area}</span>
                    <span className="font-body text-sm text-gray-500">Total Area</span>
                  </motion.div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────── */}
      {galleryImages.length > 0 && (
        <section className="py-20" style={{ background: "#eef1fb" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <AnimatedSection className="text-center mb-12">
              <span className="font-body text-sm tracking-[0.3em] uppercase text-[#E07840] mb-4 block">
                Visual Tour
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#0f2057]">
                Project <span className="italic text-[#1B3A8C]">Gallery</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <PalgharGallerySlider images={galleryImages} projectName={project.name} />
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── AMENITIES ────────────────────────────────────────────── */}
      {project.amenities && project.amenities.length > 0 && (
        <section className="py-20" style={{ background: "#0f2057" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <AnimatedSection className="text-center mb-16">
              <span className="font-body text-sm tracking-[0.3em] uppercase text-[#E07840] mb-4 block">
                Features
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white">
                Amenities <span className="italic text-[#E07840]">&amp; Facilities</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.amenities.map((amenity, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="flex flex-col items-center text-center p-6 rounded-xl border border-[#E07840]/30 bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E07840]/20 flex items-center justify-center mb-4">
                      <span className="text-[#E07840] text-xl">✦</span>
                    </div>
                    <span className="font-body text-white/90 text-sm">{amenity.label}</span>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── LOCATION ADVANTAGES ──────────────────────────────────── */}
      {project.locationAdvantages && project.locationAdvantages.length > 0 && (
        <section className="py-20" style={{ background: "#f8f9ff" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Map / Placeholder */}
              <AnimatedSection>
                {project.mapImage && project.mapImage !== "To be updated soon" ? (
                  <div className="relative rounded-xl overflow-hidden border-2 border-[#1B3A8C]/20 shadow-lg">
                    <img
                      src={project.mapImage}
                      alt={`${project.name} location`}
                      onError={(e) => { e.currentTarget.src = assetPath("placeholder.svg"); }}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white bg-[#1B3A8C]/80 px-4 py-2 rounded-full">
                      <MapPin className="w-4 h-4 text-[#E07840]" />
                      <span className="font-body text-sm">{project.name}</span>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl overflow-hidden border-2 border-[#1B3A8C]/20 bg-[#1B3A8C]/5 w-full aspect-[4/3] flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-[#1B3A8C]/30 mx-auto mb-3" />
                      <span className="font-body text-[#1B3A8C]/50 text-sm">Map to be updated soon</span>
                    </div>
                  </div>
                )}

                <div className="mt-6 text-center mb-4">
                  <span className="font-body text-sm tracking-[0.3em] uppercase text-[#E07840] mb-3 block">
                    Connectivity
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-light text-[#0f2057]">
                    Location <span className="italic text-[#1B3A8C]">Advantage</span>
                  </h2>
                </div>
              </AnimatedSection>

              {/* Accordion */}
              <AnimatedSection delay={0.2}>
                <div className="space-y-3 mt-4">
                  {project.locationAdvantages.map((advantage, index) => (
                    <div
                      key={index}
                      className="border border-[#1B3A8C]/20 rounded-xl overflow-hidden hover:border-[#E07840]/50 transition-colors duration-300"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#1B3A8C]/5 transition-colors"
                      >
                        <span className="font-display text-lg text-[#0f2057]">{advantage.title}</span>
                        <div className="w-8 h-8 rounded-full border border-[#E07840]/50 flex items-center justify-center text-[#E07840] flex-shrink-0">
                          {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>
                      {openIndex === index && (
                        <div className="px-5 pb-5">
                          <p className="font-body text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 text-center" style={{ background: "linear-gradient(135deg, #0f2057 0%, #1B3A8C 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <span className="font-body text-sm tracking-[0.3em] uppercase text-[#E07840] mb-4 block">
              Interested?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
              Start Your <span className="italic text-[#E07840]">Journey</span>
            </h2>
            <p className="font-body text-white/70 max-w-2xl mx-auto mb-10">
              Take the first step towards owning your dream home at {project.name}.
              Our team is ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={`/enquire?project=${encodeURIComponent(project.name)}`}
                className="inline-block px-8 py-4 text-sm tracking-wider uppercase font-body bg-[#E07840] hover:bg-[#c9642e] text-white transition-colors duration-300 rounded-sm"
              >
                Schedule a Visit
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </Layout>
  );
};

export default PalgharProjectDetail;
