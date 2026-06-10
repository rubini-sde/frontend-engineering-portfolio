import SectionHeading from "./SectionHeading";
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    logoSrc: "/logos/costco_weareit_logo.jpeg",
    company: "Costco Wholesale",
    role: "Software Engineer",
    years: "2020 – Present",
    contribution: [
      "Owned and delivered mission-critical e-commerce experiences end-to-end, leading architecture, API design, and cross-functional execution for user account related workflows serving millions of daily shoppers while consistently meeting SLA and reliability targets.",
      "Led the Next.js 14→16 modernization (Turbopack, Storybook, Vitest) and drove reusable design-system adoption, cutting CI/CD build times by 40% and accelerating delivery across multiple teams.",
      "Drove Core Web Vitals and accessibility gains (97–100 Lighthouse) through headless CMS architecture, production observability, and analytics-driven monitoring — enabling zero-downtime releases and faster incident resolution.",
    ],
    highlightTags: [
      "E-Commerce",
      "Forge DS",
      "Performance Optimization",
      "A11y Champion",
    ],
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Java",
      "SpringBoot",
      "GCP",
      "Spanner",
    ],
    defaultOpen: true,
  },
  {
    logoSrc: "/logos/tableau_software_logo.jpeg",
    company: "Tableau (Salesforce)",
    role: "Software Engineer",
    years: "Jun 2019 – Dec 2019",
    contribution:
      "Designed and developed internal engineering tools to support the end-to-end test development lifecycle, improving team productivity and test reliability across frontend workflows.",
    highlightTags: ["Data Viz", "Engineering Productivity"],
    tags: ["React", "JavaScript", "Java"],
  },
  {
    logoSrc: "/logos/t_mobile_logo.jpeg",
    company: "T-Mobile",
    role: "Software Engineer",
    years: "Dec 2018 - Jun 2019",
    contribution:
      "Contributed to scalable B2B commerce applications by developing responsive frontend features using modern JavaScript frameworks and improving application reliability for enterprise users.",
    highlightTags: ["Consumer Scale"],
    tags: ["React", "JavaScript", "HTML/CSS", "REST APIs"],
  },
  {
    logoSrc: "/logos/cognizant_logo.jpeg",
    company: "Cognizant",
    role: "Programmer Analyst",
    years: "Aug 2011 - Aug 2013",
    contribution:
      "Built enterprise healthcare software for pharmacy benefit management, contributing to scalable client delivery for Express Scripts.",
    highlightTags: ["Enterprise Apps"],
    tags: ["JavaScript", "HTML/CSS", "Java", "SQL"],
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
