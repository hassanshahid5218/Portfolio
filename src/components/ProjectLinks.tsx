import type { Project } from '../content/projects';
import ExternalLink from './ExternalLink';

/** Live demo and repository links. A link is rendered only if its URL is set. */
export default function ProjectLinks({ project }: { project: Project }) {
  if (!project.demo && !project.repo) return null;
  return (
    <ul className="project-links">
      {project.demo && (
        <li>
          <ExternalLink href={project.demo} label={`${project.name} live demo`}>
            Live demo
          </ExternalLink>
        </li>
      )}
      {project.repo && (
        <li>
          <ExternalLink href={project.repo} label={`${project.name} source code on GitHub`}>
            Source code
          </ExternalLink>
        </li>
      )}
    </ul>
  );
}
