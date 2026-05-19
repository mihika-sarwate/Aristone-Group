import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4"
            type="video/mp4"
          />
          {/* Fallback to image if video doesn't load */}
        </video>
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-6 block"
        >
          Premium Real Estate Developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight"
        >
          Crafting Extraordinary
          <br />
          <span className="italic text-primary">Living Spaces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Building landmarks of luxury and trust for over 25 years. 
          Discover residences that redefine premium living.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wider px-8 py-6 text-base"
          >
            <Link to="/projects">Explore Projects</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary bg-transparent text-white hover:bg-primary/10 hover:shadow-gold-glow font-body tracking-wider px-8 py-6 text-base"
          >
            <Link to="/enquire">Enquire Now</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
