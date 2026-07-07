import { motion } from "framer-motion";
import { FiCode, FiServer, FiGlobe } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const focusAreas = [
  {
    icon: FiCode,
    title: "Full Stack Development",
    description: "Building end-to-end products across the MongoDB, Express, React, and Node stack.",
  },
  {
    icon: FiServer,
    title: "Backend Engineering",
    description: "Designing reliable REST APIs, authentication flows, and data models that scale.",
  },
  {
    icon: FiGlobe,
    title: "Modern Web Technologies",
    description: "Keeping pace with the tools and patterns that shape today's web platforms.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Problem Solving",
    description: "Breaking down complex requirements into clean, well-structured solutions.",
  },
];

const highlights = ["Clean Code", "REST APIs", "Responsive Design", "Continuous Learning"];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Turning ideas into reliable, full-stack products"
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-text-secondary leading-relaxed">
            I'm currently pursuing a <span className="text-text-primary font-medium">BS in Computer
            Science</span>, with a current CGPA of{" "}
            <span className="text-text-primary font-medium">3.81 / 4.00</span> across{" "}
            <span className="text-text-primary font-medium">4 completed semesters</span>. Alongside
            my degree, I build production-style MERN applications to translate what I learn in the
            classroom into real, working software.
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            I care about writing <span className="text-text-primary font-medium">clean code</span>,
            designing well-structured <span className="text-text-primary font-medium">REST APIs</span>,
            and shipping interfaces with{" "}
            <span className="text-text-primary font-medium">responsive design</span> that feel good to
            use on any device. Full-stack development, backend engineering, modern web technologies,
            and problem solving are the areas I'm most drawn to — and{" "}
            <span className="text-text-primary font-medium">continuous learning</span> is the thread
            that ties it all together.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {highlights.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1"
        >
          {focusAreas.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeUp} className="card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-accent">
                <Icon size={20} />
              </div>
              <h3 className="mt-3 text-base font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-text-secondary leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
