import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageSquare } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-background to-charcoal" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.8 }}
          className="h-0.5 bg-primary mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4"
        >
          Free Estimate
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl lg:text-8xl text-foreground leading-[0.95] mb-4"
        >
          Call Now
        </motion.h2>
        <motion.a
          href="tel:8182175615"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-block font-heading text-4xl sm:text-5xl lg:text-7xl text-gradient-gold hover:opacity-80 transition-opacity mb-8"
        >
          (818) 217-5615
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:8182175615"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
          <a
            href="sms:8182175615"
            className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-10 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <MessageSquare className="w-4 h-4" />
            Text Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
