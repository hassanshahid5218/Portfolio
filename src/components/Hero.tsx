import { Download } from 'lucide-react';
import { site } from '../content/site';
import ExternalLink from './ExternalLink';
import { resumeDownloadName, resumeUrl } from './resume';

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-main">
          <p className="mono-label">Portfolio</p>
          <h1 id="hero-title" className="hero-name">
            {site.name}
          </h1>
          <p className="hero-statement">{site.hero.statement}</p>
          <p className="hero-supporting">{site.hero.supporting}</p>

          <div className="hero-actions">
            <a className="btn" href="#work">
              Selected work
            </a>
            {resumeUrl && (
              <a className="btn btn--quiet" href={resumeUrl} download={resumeDownloadName}>
                <Download size={15} strokeWidth={1.75} aria-hidden="true" />
                Download resume
              </a>
            )}
            <a className="link" href="#contact">
              Get in touch
            </a>
            <ExternalLink href={site.links.github} label="Muhammad Hassan on GitHub">
              GitHub
            </ExternalLink>
          </div>
        </div>

        <aside className="hero-glance" aria-label="At a glance">
          <dl>
            {site.glance.map((row) => (
              <div key={row.label} className="glance-row">
                <dt className="mono-label">{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
