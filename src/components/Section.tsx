import type { ReactNode } from 'react';

type Props = {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
};

/**
 * Shared section frame: a hairline rule, a mono index in the margin,
 * and the content in the wide column.
 */
export default function Section({ id, index, label, title, children }: Props) {
  const headingId = `${id}-title`;
  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <div className="container section-grid">
        <div className="section-rail">
          <p className="mono-label">
            {index} / {label}
          </p>
        </div>
        <div className="section-body">
          <h2 id={headingId} className="section-title">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}
