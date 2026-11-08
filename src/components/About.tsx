import { site } from '../content/site';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" index="02" label="About" title="About">
      <div className="prose">
        {site.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
