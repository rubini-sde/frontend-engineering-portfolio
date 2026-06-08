import type { ReactNode } from "react";
import { IconExternalLink } from "@tabler/icons-react";
import Card from "./Card";

interface ProjectCardProps {
  thumbIcon: ReactNode;
  thumbBg: string;
  eyebrow: string;
  eyebrowColor: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
  linkColor: string;
  badge: string;
}

export default function ProjectCard({
  thumbIcon,
  thumbBg,
  eyebrow,
  eyebrowColor,
  name,
  description,
  tags,
  href,
  linkLabel,
  linkColor,
  badge,
}: ProjectCardProps) {
  return (
    <Card
      style={{
        padding: 0,
        overflow: "hidden",
        borderRadius: 24,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 100,
          background: thumbBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {thumbIcon}
      </div>

      <div
        style={{
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: eyebrowColor,
          }}
        >
          {eyebrow}
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)" }}>
          {name}
        </div>
        <div
          style={{
            fontSize: 12,
            color: "var(--color-muted)",
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {description}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 10,
                background: "#F5F1EE",
                color: "var(--color-muted)",
                padding: "3px 9px",
                borderRadius: 100,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.9rem 1.25rem",
          borderTop: "1.5px solid var(--color-border)",
        }}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${linkLabel} for ${name}, opens in new tab`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontSize: 12,
            fontWeight: 600,
            color: linkColor,
          }}
        >
          {linkLabel}
          <IconExternalLink size={13} aria-hidden="true" />
        </a>
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            background: "var(--color-chip-bg)",
            color: "var(--color-accent-dk)",
            padding: "3px 10px",
            borderRadius: 100,
          }}
        >
          {badge}
        </span>
      </div>
    </Card>
  );
}
