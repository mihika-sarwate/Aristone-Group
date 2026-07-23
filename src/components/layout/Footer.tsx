import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-luxury py-12 md:py-14 px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-semibold text-white">
                ARISTONE
              </span>
              <span className="font-display text-sm tracking-[0.3em] text-primary">
                GROUP
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed max-w-md">
              Crafting luxury living spaces that define the future of urban excellence.
              Every project reflects our commitment to quality, innovation, and timeless design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Enquire"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-body text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg text-white mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <span>To be updated soon</span>
              </li>
              <li>
                <a
                  href="mailto:aristonebd@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  aristonebd@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                Mira Road, Palghar
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-body text-xs text-white/50">
            � {currentYear} Aristone Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-white/50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-white/50 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

