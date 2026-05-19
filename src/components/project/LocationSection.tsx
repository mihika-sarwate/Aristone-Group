import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LocationAdvantage } from "@/data/projects";
import { Plus, Minus, MapPin } from "lucide-react";

interface LocationSectionProps {
  locationAdvantages: LocationAdvantage[];
  mapImage?: string;
  projectName: string;
}

export function LocationSection({ locationAdvantages, mapImage, projectName }: LocationSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-premium-dark text-white section-padding" ref={ref}>
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Connectivity
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Location <span className="italic text-primary">Advantage</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Map Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={mapImage || "/images/projects/stock-11.jpg"}
              alt={`${projectName} location`}
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-body text-sm tracking-wider">{projectName}</span>
            </div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            {locationAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border border-white/10 rounded-lg overflow-hidden hover:border-primary/30 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <span className="font-display text-lg md:text-xl text-white">
                    {advantage.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center text-primary"
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <p className="font-body text-sm md:text-base text-white/70 leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
