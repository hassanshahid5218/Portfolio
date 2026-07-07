import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtext="A couple of full-stack applications that reflect how I approach architecture, authentication, and user experience."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-10 grid gap-8 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
