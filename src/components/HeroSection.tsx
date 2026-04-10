import { motion } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-adu.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex">
      {/* Left content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-28 pb-16 lg:pt-20 relative z-10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-0.5 bg-primary mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-6"
        >
          ADU & Garage Conversions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.95] mb-6"
        >
          Turn Your{" "}
          <span className="text-gradient-gold">Garage</span> Into
          Monthly Income
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-body text-foreground/60 text-lg max-w-md mb-10 leading-relaxed"
        >
          Earn $2,000 – $3,500+/month. Increase your property value and add
          living space legally with CWS Construction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="tel:8182175615"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            Free Estimate
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 font-body font-medium text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Right image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:block w-1/2 relative"
      >
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern garage conversion ADU interior"
            className="w-full h-full object-cover"
            width={1280}
            height={960}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 hover:text-primary transition-colors"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
