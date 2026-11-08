import { skillGroups } from '../content/skills';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skills" index="03" label="Stack" title="Technologies I’ve worked with">
      <p className="section-intro">
        Tools from my projects and coursework. Bold marks what most of my work is built on; it is not
        a proficiency ranking.
      </p>
      <dl className="skills">
        {skillGroups.map((group) => (
          <div key={group.label} className="skills-row">
            <dt className="mono-label">{group.label}</dt>
            <dd>
              <ul className="skills-list">
                {group.items.map((s) => (
                  <li key={s.name} className={s.core ? 'is-core' : undefined}>
                    {s.name}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
