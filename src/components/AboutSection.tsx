import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import projectConstruction from "@/assets/project-construction.jpg";

const benefits = [
  "Full Garage Conversions",
  "ADU Design & Build",
  "Plans + Permits Included",
  "Fast & Affordable",
  "Increase Your Property Value",
  "Add Living Space Legally",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={projectConstruction}
                alt="CWS Construction team at work"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary -z-10" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 0.8 }}
              className="h-0.5 bg-primary mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4"
            >
              About CWS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-4xl lg:text-6xl text-foreground leading-[0.95] mb-6"
            >
              Building with Purpose & Precision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-foreground/50 text-lg leading-relaxed mb-8"
            >
              CWS Construction specializes in garage conversions and ADU builds
              across Los Angeles. We deliver quality craftsmanship at honest prices,
              handling everything from permits to the final walkthrough.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body text-foreground/70">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
