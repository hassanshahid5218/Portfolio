export default function SectionHeading({ eyebrow, title, subtext, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-heading">{title}</h2>
      {subtext && (
        <p className={`section-subtext ${center ? "mx-auto" : ""}`}>{subtext}</p>
      )}
    </div>
  );
}
