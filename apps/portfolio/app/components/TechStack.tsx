import SectionHeading from "./SectionHeading";

type Level = 1 | 2 | 3 | 4;

const pillStyles: Record<
  Level,
  { background: string; border: string; color: string }
> = {
  1: { background: "#FDF5F2", border: "1.5px solid #F0DDD6", color: "#C9A99E" },
  2: { background: "#FCDDD2", border: "1.5px solid #F5C4B4", color: "#C2512D" },
  3: { background: "#F5A98E", border: "1.5px solid #E57C5A", color: "#7A2910" },
  4: { background: "#E57C5A", border: "1.5px solid #C2512D", color: "#fff" },
};

const legendLabels: { level: Level; label: string }[] = [
  { level: 1, label: "Familiar" },
  { level: 2, label: "Proficient" },
  { level: 3, label: "Fluent" },
  { level: 4, label: "Expert" },
];

const rows: { label: string; pills: { name: string; level: Level }[] }[] = [
  {
    label: "Core",
    pills: [
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "HTML / CSS", level: 3 },
      { name: "Java", level: 3 },
    ],
  },
  {
    label: "UI & Design",
    pills: [
      { name: "Design Systems", level: 4 },
      { name: "Storybook", level: 4 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Figma", level: 2 },
      { name: "CSS-in-JS (Styled Components)", level: 3 },
    ],
  },
  {
    label: "AI & Productivity",
    pills: [
      { name: "Gitbub Copilot CLI", level: 4 },
      { name: "Claude Code", level: 4 },
    ],
  },
  {
    label: "Frameworks & Libraries",
    pills: [
      { name: "Tanstack Virtual", level: 3 },
      { name: "SWR", level: 3 },
      { name: "Formik", level: 3 },
      { name: "React Hook Form", level: 2 },
    ],
  },
  {
    label: "Backend",
    pills: [
      { name: "Spring Boot (REST APIs)", level: 3 },
      { name: "Spring Security", level: 3 },
      { name: "Spring Data / JPA", level: 3 },
      { name: "Microservices Architecture", level: 3 },
      { name: "Maven / Gradle", level: 3 },
    ],
  },
  {
    label: "Tooling",
    pills: [
      { name: "Webpack", level: 4 },
      { name: "Storybook", level: 4 },
      { name: "Figma", level: 4 },
      { name: "Swagger", level: 4 },
      { name: "Contentstack", level: 4 },
      { name: "Turbopack", level: 3 },
      { name: "Vite", level: 3 },
      { name: "CI/CD", level: 3 },
      { name: "Git", level: 3 },
      { name: "Vercel", level: 3 },
    ],
  },
  {
    label: "Observability",
    pills: [
      { name: "GCP Logging", level: 4 },
      { name: "LogRocket", level: 4 },
      { name: "Adobe Analytics", level: 4 },
      { name: "Core Web Vitals", level: 3 },
      { name: "Lighthouse", level: 3 },
    ],
  },
  {
    label: "Testing",
    pills: [
      { name: "Jest", level: 3 },
      { name: "React Testing Library", level: 4 },
      { name: "Vitest", level: 4 },
      { name: "Playwright", level: 2 },
    ],
  },
  {
    label: "APIs",
    pills: [
      { name: "REST", level: 3 },
      { name: "GraphQL", level: 2 },
    ],
  },
];

const LABEL_WIDTH = 110;

export default function TechStack() {
  return (
    <section id="techstack" aria-labelledby="techstack-heading">
      <SectionHeading id="techstack-heading">Tech Stack</SectionHeading>

      {/* Spectrum scale header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `${LABEL_WIDTH}px 1fr`,
          gap: "1rem",
          alignItems: "center",
          marginBottom: "0.75rem",
        }}
      >
        <div />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 4px",
          }}
        >
          {legendLabels.map(({ label, level }) => (
            <span
              key={label}
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: level === 4 ? "var(--color-accent)" : "#C9BFB8",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Gradient bar */}
      <div
        style={{
          height: 3,
          background: "linear-gradient(to right, #F5EDE8, #F0C4B0, #E57C5A)",
          borderRadius: 100,
          marginBottom: "1.75rem",
          marginLeft: LABEL_WIDTH,
        }}
      />

      {/* Category rows */}
      {rows.map((row, i) => (
        <div key={row.label}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `${LABEL_WIDTH}px 1fr`,
              gap: "1rem",
              alignItems: "center",
              marginBottom: "1.1rem",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#C9BFB8",
                textAlign: "right",
                paddingRight: "1rem",
              }}
            >
              {row.label}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {row.pills.map(({ name, level }) => (
                <span
                  key={name}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 100,
                    fontSize: 12,
                    fontWeight: 600,
                    ...pillStyles[level],
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          {i < rows.length - 1 && (
            <div
              style={{
                height: "1.5px",
                background: "var(--color-border)",
                marginBottom: "1.1rem",
                marginLeft: LABEL_WIDTH,
              }}
            />
          )}
        </div>
      ))}
    </section>
  );
}
