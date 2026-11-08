import { projects } from '../content/projects';
import Section from './Section';
import FeatureProject from './FeatureProject';
import LedgerProject from './LedgerProject';

export default function Work() {
  const [lead, second, ...rest] = projects;

  return (
    <Section id="work" index="01" label="Work" title="Selected work">
      <p className="section-intro">
        Four projects. The first two are full-stack applications with live demos; the others carry
        the same habits over to a React and Redux web app and a mobile app.
      </p>

      <div className="work-stack">
        <FeatureProject project={lead} number="01" variant="lead" />
        <FeatureProject project={second} number="02" variant="split" />

        <div className="ledger">
          <h3 className="ledger-heading mono-label">Also built</h3>
          {rest.map((p, i) => (
            <LedgerProject key={p.slug} project={p} number={`0${i + 3}`} />
          ))}
        </div>
      </div>
    </Section>
  );
}
