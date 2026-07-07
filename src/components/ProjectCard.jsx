import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectCard({ project }) {
  const { title, description, image, techStack, features, githubUrl, liveUrl } = project;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="card group overflow-hidden"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Key Features
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-1.5 text-sm text-text-secondary">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary flex-1 sm:flex-none"
          >
            <FiGithub size={17} />
            GitHub
          </a>
          <a href={liveUrl} target="_blank" rel="noreferrer" className="btn-primary flex-1 sm:flex-none">
            <FiExternalLink size={17} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
