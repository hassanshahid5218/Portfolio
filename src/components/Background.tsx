import { education, experience, practice, site } from '../content/site';
import Section from './Section';
import ExternalLink from './ExternalLink';

export default function Background() {
  return (
    <Section id="background" index="04" label="Background" title="Background">
      <div className="background">
        <div className="bg-block">
          <h3 className="mono-label">Experience and learning</h3>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.title} className="timeline-item">
                <p className="timeline-kind mono-label">
                  {e.kind}
                  {e.period ? ` · ${e.period}` : ''}
                </p>
                <p className="timeline-title">
                  {e.title} <span className="timeline-org">— {e.org}</span>
                </p>
                <p className="timeline-body">{e.body}</p>
              </li>
            ))}
            <li className="timeline-item">
              <p className="timeline-kind mono-label">Practice</p>
              <p className="timeline-title">
                {practice.label} <span className="timeline-org">— {practice.solved} {practice.note}</span>
              </p>
              <p className="timeline-body">
                <ExternalLink href={site.links.leetcode} label="Muhammad Hassan on LeetCode">
                  View LeetCode profile
                </ExternalLink>
              </p>
            </li>
          </ol>
        </div>

        <div className="bg-block">
          <h3 className="mono-label">Education</h3>
          <div className="education">
            <p className="timeline-title">{education.degree}</p>
            <p className="timeline-body">{education.school}</p>
            <p className="timeline-body">{education.period}</p>
            <p className="timeline-body">
              CGPA <span className="tabular">{education.cgpa}</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
