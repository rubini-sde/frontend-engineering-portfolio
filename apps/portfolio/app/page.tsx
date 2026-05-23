import { Card } from "@repo/ui/card";
import { HeroCtas } from "./hero-ctas";

const projects = [
  {
    title: "Design System",
    description:
      "A shared component library built with React, Tailwind CSS, and Storybook — powering consistent UI across multiple apps.",
    href: "https://github.com",
  },
  {
    title: "Portfolio Site",
    description:
      "This site — a Next.js 16 app in a Turborepo monorepo, deployed to Vercel with automated previews on every PR.",
    href: "https://github.com",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 gap-6">
        <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase">
          Frontend Engineer
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-neutral-900 max-w-2xl">
          Hi, I&apos;m Rubini Dhanasekaran
        </h1>
        <p className="text-lg text-neutral-500 max-w-xl leading-relaxed">
          I build accessible, performant web applications with React and
          TypeScript. Currently focused on design systems and developer tooling.
        </p>
        <HeroCtas />
      </main>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 py-20 bg-neutral-50 flex flex-col items-center gap-10"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Featured Projects
          </h2>
          <p className="mt-2 text-neutral-500">
            A selection of things I&apos;ve built.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              href={project.href}
              variant="elevated"
              className="p-6"
            >
              {project.description}
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-neutral-400">
        &copy; {new Date().getFullYear()} Rubini Dhanasekaran
      </footer>
    </div>
  );
}
