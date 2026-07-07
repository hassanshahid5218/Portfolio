import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-surface/20">
      <SectionHeading
        eyebrow="Skills"
        title="Tools and technologies I work with"
        subtext="A practical toolkit built for shipping full-stack products end to end — from data model to deployed UI."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.title} variants={fadeUp} className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-sm text-text-secondary transition-colors duration-200 hover:border-accent/50 hover:text-text-primary"
                >
                  <Icon size={15} className="text-accent" />
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
