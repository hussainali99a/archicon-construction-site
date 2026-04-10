import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import plansImage from "@/assets/plans-permits.jpg";

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 lg:py-44 overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={plansImage}
          alt="Architectural blueprints"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.8 }}
          className="h-0.5 bg-primary mx-auto mb-10"
        />
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl text-foreground leading-[0.95] mb-8"
        >
          "Creating <span className="text-gradient-gold">Spaces</span> for
          a Lifetime"
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-foreground/50 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          At CWS Construction, we believe every homeowner deserves to maximize their property's potential.
          From design to permits to the final build — we handle it all.
        </motion.p>
      </div>
    </section>
  );
};

export default QuoteSection;
