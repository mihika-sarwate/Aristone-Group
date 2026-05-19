import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ value, suffix, label, delay }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <span className="font-display text-5xl md:text-6xl lg:text-7xl text-primary">
        {count}
        {suffix}
      </span>
      <p className="font-body text-sm tracking-wider uppercase text-muted-foreground mt-2">
        {label}
      </p>
    </motion.div>
  );
}

export function Statistics() {
  const stats = [
    { value: 25, suffix: "+", label: "Years of Excellence" },
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 15, suffix: "M", label: "Sq. Ft. Developed" },
    { value: 5000, suffix: "+", label: "Happy Families" },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        <AnimatedSection className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Our Legacy
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Numbers That <span className="italic text-primary">Speak</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
