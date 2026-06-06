import SkillPill from "./SkillPill";

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
      <h2
        id="skills-heading"
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "var(--color-text)",
          marginBottom: "1.25rem",
          letterSpacing: "-0.01em",
        }}
      >
        Skills
      </h2>
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
