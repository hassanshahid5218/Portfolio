import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

const contactMethods = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: FiGithub, label: "GitHub", value: "hassanshahid5218", href: profile.socials.github },
  { icon: FiLinkedin, label: "LinkedIn", value: "Muhammad Hassan", href: profile.socials.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <SectionWrapper id="contact" className="bg-surface/20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        subtext="Have a role, a project, or just want to say hi? My inbox is open."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="card flex items-center gap-4 p-5 transition-colors duration-200 hover:border-accent/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-accent">
                <Icon size={19} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  {label}
                </p>
                <p className="truncate text-sm font-medium text-text-primary">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="card space-y-4 p-6 sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-secondary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the role or project..."
              className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent focus:outline-none"
            />
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto">
            <FiSend size={16} />
            Send Message
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
