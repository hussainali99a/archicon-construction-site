import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, FileText, DollarSign, Hammer } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Full Garage Conversions",
    description:
      "Transform your unused garage into a fully functional living space — bedroom, studio, or rental unit.",
  },
  {
    icon: Hammer,
    title: "ADU Design & Build",
    description:
      "Complete accessory dwelling unit construction from foundation to finish, tailored to your property.",
  },
  {
    icon: FileText,
    title: "Plans + Permits Included",
    description:
      "We handle all architectural plans, engineering, and city permits so you don't have to.",
  },
  {
    icon: DollarSign,
    title: "Fast & Affordable",
    description:
      "Quality work at a fair price. We deliver on time and on budget with no hidden fees.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
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
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-4xl lg:text-6xl text-foreground leading-[0.95]"
          >
            Quality Work, Fair Price
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="bg-secondary p-8 lg:p-12 group hover:bg-charcoal transition-colors duration-500"
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-2xl lg:text-3xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-foreground/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
