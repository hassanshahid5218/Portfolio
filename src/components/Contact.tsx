import { site } from '../content/site';
import Section from './Section';
import ExternalLink from './ExternalLink';

export default function Contact() {
  return (
    <Section id="contact" index="05" label="Contact" title="Get in touch">
      <p className="contact-lede">
        I’m looking for software development internships and open-source projects to contribute to. If
        you’re hiring, maintaining something I could help with, or just want to talk about a project,
        email is the best way to reach me.
      </p>

      <p className="contact-email">
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <ul className="contact-links">
        <li>
          <ExternalLink href={site.links.linkedin} label="Muhammad Hassan on LinkedIn">
            LinkedIn
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={site.links.github} label="Muhammad Hassan on GitHub">
            GitHub
          </ExternalLink>
        </li>
      </ul>
    </Section>
  );
}
