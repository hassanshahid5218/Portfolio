import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  /** Describes the destination for screen readers, e.g. "Learnix live demo". */
  label?: string;
  className?: string;
  children: ReactNode;
};

/** Opens in a new tab, with an arrow icon and an accessible description. */
export default function ExternalLink({ href, label, className = 'link', children }: Props) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ? `${label} (opens in a new tab)` : undefined}
    >
      {children}
      <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" className="link-icon" />
    </a>
  );
}
