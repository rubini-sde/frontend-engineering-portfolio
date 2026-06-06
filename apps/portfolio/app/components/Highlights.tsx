import {
  IconRocket,
  IconLayout,
  IconEye,
  IconAccessible,
} from "@tabler/icons-react";
import HighlightCard from "./HighlightCard";

const cards = [
  {
    icon: <IconRocket size={20} color="#C2512D" aria-hidden="true" />,
    iconBg: "#FDE8DF",
    metric: "4s → 2.4s",
    metricAriaLabel: "LCP improved from 4 seconds to 2.4 seconds",
    title: "LCP win",
    description:
      "Reduced largest contentful paint by 40% through code splitting and critical resource preloading.",
  },
  {
    icon: <IconLayout size={20} color="#1D4ED8" aria-hidden="true" />,
    iconBg: "#DBEAFE",
    metric: "Design system author",
    metricAriaLabel: "Author of the Forge design system",
    title: "Forge DS",
    description:
      "Built and maintained the Forge design system, adopted across 5+ product teams.",
  },
  {
    icon: <IconEye size={20} color="#15803D" aria-hidden="true" />,
    iconBg: "#DCFCE7",
    metric: "Custom logger",
    metricAriaLabel: "Built a custom frontend observability logger",
    title: "Frontend observability",
    description:
      "Authored a lightweight logging SDK for real-time error and performance monitoring.",
  },
  {
    icon: <IconAccessible size={20} color="#854D0E" aria-hidden="true" />,
    iconBg: "#FEF9C3",
    metric: "97–100",
    metricAriaLabel: "Accessibility score consistently 97 to 100",
    title: "Accessibility champion",
    description:
      "Achieved and maintained Lighthouse a11y scores of 97–100 across all product surfaces.",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      aria-labelledby="highlights-heading"
      style={{ marginBottom: "3rem" }}
    >
      <h2
        id="highlights-heading"
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "var(--color-text)",
          marginBottom: "1.25rem",
          letterSpacing: "-0.01em",
        }}
      >
        Highlights
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}
        className="highlights-grid"
      >
        {cards.map((card) => (
          <HighlightCard key={card.title} {...card} />
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          .highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
