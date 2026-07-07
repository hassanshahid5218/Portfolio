import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

const socialLinks = [
  { icon: FiGithub, href: profile.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: profile.socials.email, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-text-secondary">
          © {year} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-200 hover:border-accent/60 hover:text-text-primary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <a href="#hero" className="text-sm text-text-secondary hover:text-text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
