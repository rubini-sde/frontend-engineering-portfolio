import SectionHeading from "./SectionHeading";
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    logoInitials: "CO",
    logoColor: "#C2512D",
    logoBg: "#FDE8DF",
    company: "Costco Wholesale",
    role: "Senior Frontend Engineer",
    years: "2019 – Present",
    contribution:
      "Built and owns Forge — a company-wide design system adopted across all product teams. Reduced LCP from 4s to 2.4s through image optimisation, code splitting, and critical CSS. Engineered a custom Next.js logging pipeline writing to GCP Observability with sanitisation and production dashboards.",
    highlightTags: ["Forge DS", "LCP 4s → 2.4s"],
    tags: ["React", "Next.js", "TypeScript", "GCP"],
    defaultOpen: true,
  },
  {
    logoInitials: "TA",
    logoColor: "#7C3AED",
    logoBg: "#F3E8FF",
    company: "Tableau (Salesforce)",
    role: "Frontend Engineer",
    years: "2017 – 2019",
    contribution:
      "Built data visualisation UI components for Tableau's enterprise analytics platform. Contributed to accessibility improvements and component library standards used by enterprise customers worldwide.",
    highlightTags: ["Data Viz", "Accessibility"],
    tags: ["React", "JavaScript", "WCAG"],
  },
  {
    logoInitials: "TM",
    logoColor: "#2563EB",
    logoBg: "#DBEAFE",
    company: "T-Mobile",
    role: "Frontend Developer",
    years: "2016 – 2017",
    contribution:
      "Built customer-facing web interfaces for account management flows used across millions of T-Mobile subscribers. Gained deep experience building at consumer scale with high reliability requirements.",
    highlightTags: ["Consumer Scale"],
    tags: ["JavaScript", "HTML/CSS", "REST APIs"],
  },
  {
    logoInitials: "CG",
    logoColor: "#059669",
    logoBg: "#D1FAE5",
    company: "Cognizant",
    role: "Junior Frontend Developer",
    years: "2014 – 2016",
    contribution:
      "Delivered enterprise web applications in compliance-sensitive environments. Built a strong foundation in component-driven UI development and cross-functional collaboration with design and backend teams.",
    highlightTags: ["Enterprise Apps"],
    tags: ["JavaScript", "HTML/CSS", "CI/CD"],
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      {experiences.map((exp) => (
        <ExperienceItem key={exp.company} {...exp} />
      ))}
    </section>
  );
}
