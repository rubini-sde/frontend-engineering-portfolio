import SkillPill from "./SkillPill";
import SectionHeading from "./SectionHeading";

const coreSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Design Systems",
  "Core Web Vitals",
];

const secondarySkills = [
  "GCP",
  "Webpack",
  "Node.js",
  "WCAG",
  "CI/CD",
  "GraphQL",
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      style={{ marginBottom: "3rem" }}
    >
      <SectionHeading id="skills-heading">Skills</SectionHeading>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          listStyle: "none",
        }}
      >
        {coreSkills.map((skill) => (
          <SkillPill key={skill} label={skill} variant="primary" />
        ))}
        {secondarySkills.map((skill) => (
          <SkillPill key={skill} label={skill} variant="secondary" />
        ))}
      </ul>
    </section>
  );
}
