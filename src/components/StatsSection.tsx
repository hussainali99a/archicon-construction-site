import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "$2K–$3.5K+", label: "Monthly Rental Income" },
  { value: "100+", label: "Projects Completed" },
  { value: "100%", label: "Permits Approved" },
  { value: "5★", label: "Client Satisfaction" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 bg-primary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-3xl lg:text-5xl text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-body text-sm text-primary-foreground/70 tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
