import { HiOutlineAcademicCap } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { education } from "../data/education";

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-surface/20">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="mt-10 space-y-6">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="card flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-accent">
              <HiOutlineAcademicCap size={28} />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold">{edu.institution}</h3>
                <span className="text-sm font-medium text-text-secondary">{edu.duration}</span>
              </div>
              <p className="text-text-secondary">{edu.campus}</p>
              <p className="mt-2 font-semibold text-text-primary">{edu.degree}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="pill">CGPA: {edu.cgpa}</span>
                <span className="pill">{edu.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
