// import { motion } from "framer-motion";
// import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
// import { profile } from "../data/profile";

// const container = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
// };

// const socialLinks = [
//   { icon: FiGithub, href: profile.socials.github, label: "GitHub" },
//   { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
//   { icon: FiMail, href: profile.socials.email, label: "Email" },
// ];

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative flex min-h-screen items-center overflow-hidden bg-hero-glow pt-24"
//     >
//       {/* Ambient grid background */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black_10%,transparent_70%)]"
//       />

//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="visible"
//         className="section flex flex-col items-start gap-6 py-0"
//       >
//         <motion.span variants={item} className="pill">
//           Available for new opportunities
//         </motion.span>

//         <motion.h1
//           variants={item}
//           className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
//         >
//           Hi, I'm <span className="text-accent">{profile.name}</span>
//         </motion.h1>

//         <motion.p
//           variants={item}
//           className="text-xl font-semibold text-text-primary/90 sm:text-2xl"
//         >
//           {profile.title}
//         </motion.p>

//         <motion.p variants={item} className="max-w-2xl text-base text-text-secondary sm:text-lg">
//           {profile.tagline}
//         </motion.p>

//         <motion.div variants={item} className="mt-2 flex flex-wrap items-center gap-4">
//           <a href={profile.resumeUrl} download className="btn-primary">
//             <FiDownload size={18} />
//             Download Resume
//           </a>
//           <a href="#projects" className="btn-secondary">
//             View Projects
//           </a>
//         </motion.div>

//         <motion.div variants={item} className="mt-4 flex items-center gap-4">
//           {socialLinks.map(({ icon: Icon, href, label }) => (
//             <a
//               key={label}
//               href={href}
//               target={href.startsWith("http") ? "_blank" : undefined}
//               rel={href.startsWith("http") ? "noreferrer" : undefined}
//               aria-label={label}
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-text-primary"
//             >
//               <Icon size={19} />
//             </a>
//           ))}
//         </motion.div>
//       </motion.div>

//       <motion.a
//         href="#about"
//         aria-label="Scroll to About section"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.6 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary hover:text-text-primary"
//       >
//         <motion.div
//           animate={{ y: [0, 6, 0] }}
//           transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <FiArrowDown size={20} />
//         </motion.div>
//       </motion.a>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiDownload,
} from "react-icons/fi";
import { profile } from "../data/profile";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const socialLinks = [
  { icon: FiGithub, href: profile.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: profile.socials.email, label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero-glow pt-24"
    >
      {/* Ambient grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black_10%,transparent_70%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="section grid grid-cols-1 items-center gap-12 py-0 lg:grid-cols-2"
      >
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6">
          <motion.span variants={item} className="pill">
            Available for new opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
          >
            Hi, I'm <span className="text-accent">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl font-semibold text-text-primary/90 sm:text-2xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-2xl text-base text-text-secondary sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-2 flex flex-wrap items-center gap-4"
          >
            <a href={profile.resumeUrl} download className="btn-primary">
              <FiDownload size={18} />
              Download Resume
            </a>

            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-4 flex items-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-text-primary"
              >
                <Icon size={19} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Image Placeholder */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-end"
           >
            <div className="relative">

              {/* Soft Blue Glow */}
              <div className="absolute -inset-6 rounded-[32px] bg-accent/20 blur-3xl"></div>

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[32px] border border-accent/20 bg-surface/80 p-3 shadow-2xl backdrop-blur-md">

                <img
                  src={profileImage}
                  alt="Muhammad Hassan"
                  className="h-[480px] w-[380px] rounded-[24px] object-cover object-top transition duration-500 hover:scale-[1.02]"
                />

              </div>

            </div>
          </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary hover:text-text-primary"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}