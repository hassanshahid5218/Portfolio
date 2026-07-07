import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { achievements } from "../data/achievements";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading eyebrow="Achievements" title="Milestones along the way" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid gap-6 sm:grid-cols-2"
      >
        {achievements.map(({ title, description, icon: Icon, link, linkLabel }) => (
          <motion.div key={title} variants={fadeUp} className="card p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-accent">
              <Icon size={22} />
            </div>
            <h3 className="mt-4 text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">{description}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-primary"
              >
                {linkLabel}
                <FiArrowUpRight size={16} />
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
