import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex flex-col items-center leading-none">
          <span className="font-heading text-3xl text-primary tracking-widest">CWS</span>
          <span className="text-[9px] font-body font-semibold tracking-[0.3em] text-foreground/70 uppercase">
            Construction
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="tel:8182175615"
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 font-body font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors duration-300"
        >
          <Phone className="w-4 h-4" />
          (818) 217-5615
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-lg font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:8182175615"
                className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-body font-semibold tracking-wide"
              >
                <Phone className="w-4 h-4" />
                (818) 217-5615
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
