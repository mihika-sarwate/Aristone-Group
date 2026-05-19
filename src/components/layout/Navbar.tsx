import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_MESSAGE = encodeURIComponent("Hello, I would like to enquire about one of your projects!");

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Enquire", path: "/enquire" },
  { name: "Chat", path: `https://wa.me/918779282801?text=${WHATSAPP_MESSAGE}`, external: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container-luxury px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={cn(
              "font-display text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              ARISTONE
            </span>
            <span className={cn(
              "font-display text-sm tracking-[0.3em] transition-colors duration-300",
              isScrolled ? "text-primary" : "text-primary"
            )}>
              GROUP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "font-body text-sm tracking-wider uppercase link-underline transition-colors duration-300",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "font-body text-sm tracking-wider uppercase link-underline transition-colors duration-300",
                    location.pathname === link.path && "text-primary",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-3xl text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        "font-display text-3xl transition-colors",
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
