import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projectExterior from "@/assets/project-exterior.jpg";
import projectConstruction from "@/assets/project-construction.jpg";
import heroAdu from "@/assets/hero-adu.jpg";

const projects = [
  {
    image: heroAdu,
    label: "Garage Conversion",
    title: "Modern Interior Studio",
    width: 1280,
    height: 960,
  },
  {
    image: projectExterior,
    label: "ADU Build",
    title: "Detached Guest House",
    width: 800,
    height: 1000,
  },
  {
    image: projectConstruction,
    label: "In Progress",
    title: "Backyard ADU Framing",
    width: 800,
    height: 1000,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
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
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-4xl lg:text-6xl text-foreground leading-[0.95]"
            >
              Recent Projects
            </motion.h2>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={project.width}
                height={project.height}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  {project.label}
                </span>
                <h3 className="font-heading text-2xl lg:text-3xl text-foreground mt-1">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
