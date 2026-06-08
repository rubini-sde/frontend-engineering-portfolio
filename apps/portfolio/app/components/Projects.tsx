import { IconStack2, IconShoppingCart } from "@tabler/icons-react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    thumbIcon: <IconStack2 size={34} color="#2563EB" aria-hidden="true" />,
    thumbBg: "#E8F4FD",
    eyebrow: "Design System",
    eyebrowColor: "#2563EB",
    name: "Forge — Storybook",
    description:
      "Live component library powering Costco.com — browsable docs, interactive playground, and design tokens, deployed on Vercel.",
    tags: ["React", "Storybook", "TypeScript"],
    href: "https://rubini-design-system-storybook.vercel.app/",
    linkLabel: "View Storybook",
    linkColor: "#2563EB",
    badge: "Vercel",
  },
  {
    thumbIcon: (
      <IconShoppingCart size={34} color="var(--color-accent)" aria-hidden="true" />
    ),
    thumbBg: "var(--color-chip-bg)",
    eyebrow: "E-commerce",
    eyebrowColor: "var(--color-accent)",
    name: "Costco.com Frontend",
    description:
      "High-traffic retail platform serving millions of users. Led performance, accessibility, and the frontend observability pipeline.",
    tags: ["Next.js", "GCP", "Webpack"],
    href: "https://www.costco.com",
    linkLabel: "Visit site",
    linkColor: "var(--color-accent)",
    badge: "Live",
  },
];

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading" style={{ marginBottom: "3rem" }}>
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}
        className="grid-collapse-1"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
