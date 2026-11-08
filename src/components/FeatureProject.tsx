import type { Project } from '../content/projects';
import ProjectLinks from './ProjectLinks';

type Props = {
  project: Project;
  number: string;
  /**
   * "lead": summary on the left, details on the right.
   * "split": the same content mirrored, with a slightly smaller title.
   */
  variant: 'lead' | 'split';
};

export default function FeatureProject({ project, number, variant }: Props) {
  return (
    <article className={`feature feature--${variant}`}>
      <header className="feature-head">
        <p className="mono-label">
          {number} — {project.kind}
        </p>
        <h3 className="feature-title">{project.name}</h3>
      </header>

      <p className="feature-summary">{project.summary}</p>

      <ul className="detail-list feature-details">
        {project.details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <footer className="feature-meta">
        <div>
          <p className="mono-label">Stack</p>
          <p className="stack-line">{project.stack}</p>
        </div>
        <ProjectLinks project={project} />
      </footer>
    </article>
  );
}
