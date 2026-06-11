import { IconStack2, IconShoppingCart, IconSchool } from "@tabler/icons-react";
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
      "Live component library — browsable docs, interactive playground, and design tokens, deployed on Vercel.",
    tags: ["React", "Storybook", "TypeScript", "Turborepo"],
    href: "https://rubini-design-system-storybook.vercel.app/",
    linkLabel: "View Storybook",
    linkColor: "#2563EB",
    badge: "Vercel",
  },
  // {
  //   thumbIcon: <IconSchool size={34} color="#059669" aria-hidden="true" />,
  //   thumbBg: "#EAF6EF",
  //   eyebrow: "Coursework",
  //   eyebrowColor: "#059669",
  //   name: "Your Project Name",
  //   description:
  //     "Brief description of what it does, the problem it solves, and the key technical choices you made building it.",
  //   tags: ["React", "Add tags"],
  //   href: "#",
  //   linkLabel: "View project",
  //   linkColor: "#059669",
  //   badge: "Course",
  // },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
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
