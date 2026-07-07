import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Wraps a page section with an id (for nav anchoring), consistent spacing,
 * and a subtle fade/slide-up reveal triggered once when it enters the viewport.
 */
export default function SectionWrapper({ id, className = "", children }) {
  return (
    <section id={id} className={`section ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        {children}
      </motion.div>
    </section>
  );
}
