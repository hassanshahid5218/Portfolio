import type { Project } from '../content/projects';
import ProjectLinks from './ProjectLinks';

export default function LedgerProject({ project, number }: { project: Project; number: string }) {
  return (
    <article className="ledger-item">
      <header className="ledger-head">
        <p className="mono-label">
          {number} — {project.kind}
        </p>
        <h3 className="ledger-title">{project.name}</h3>
      </header>

      <div className="ledger-body">
        <p>{project.summary}</p>
        <ul className="detail-list detail-list--compact">
          {project.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <p className="stack-line">{project.stack}</p>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
