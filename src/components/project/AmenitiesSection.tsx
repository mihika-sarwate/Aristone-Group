import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Amenity } from "@/data/projects";
import * as LucideIcons from "lucide-react";

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

export function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.Star;
  };

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Lifestyle
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Premium <span className="italic text-primary">Amenities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = getIcon(amenity.icon);
            return (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-card rounded-lg p-6 md:p-8 shadow-premium hover:shadow-gold-glow transition-all duration-500 cursor-pointer border border-transparent hover:border-primary/20"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500"
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent 
                      className="w-7 h-7 md:w-8 md:h-8 text-primary transition-colors duration-500 group-hover:text-primary" 
                    />
                  </motion.div>
                  <span className="font-body text-sm md:text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                    {amenity.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
