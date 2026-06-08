import type { ReactNode } from "react";
import Card from "./Card";

interface HighlightCardProps {
  icon: ReactNode;
  iconBg: string;
  metric: string;
  metricAriaLabel: string;
  title: string;
  description: string;
}

export default function HighlightCard({
  icon,
  iconBg,
  metric,
  metricAriaLabel,
  title,
  description,
}: HighlightCardProps) {
  return (
    <Card>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        {icon}
      </div>
      <div
        aria-label={metricAriaLabel}
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: "var(--color-text)",
          marginBottom: "0.35rem",
          letterSpacing: "-0.02em",
        }}
      >
        {metric}
      </div>
      <div
        style={{
          fontWeight: 600,
          fontSize: 14,
          color: "var(--color-text)",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 13,
          color: "var(--color-muted)",
          lineHeight: 1.6,
        }}
      >
        {description}
      </div>
    </Card>
  );
}
