"use client";

import { useState } from "react";
import Image from "next/image";
import { IconChevronDown } from "@tabler/icons-react";

interface ExperienceItemProps {
  logoSrc: string;
  company: string;
  role: string;
  years: string;
  contribution: string | string[];
  tags: string[];
  highlightTags: string[];
  defaultOpen?: boolean;
}

export default function ExperienceItem({
  logoSrc,
  company,
  role,
  years,
  contribution,
  tags,
  highlightTags,
  defaultOpen = false,
}: ExperienceItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: `1.5px solid ${open ? "var(--color-accent)" : "var(--color-border)"}`,
        borderRadius: 20,
        marginBottom: 10,
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      <button
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1.1rem 1.25rem",
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "#fff",
            border: "1.5px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image src={logoSrc} alt="" fill style={{ objectFit: "cover" }} />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text)" }}>
            {company}
          </div>
          <div style={{ fontSize: 12, fontWeight: 500, color: "var(--color-muted)", marginTop: 2 }}>
            {role}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 11,
              color: "var(--color-subtle)",
              letterSpacing: "0.06em",
            }}
          >
            {years}
          </span>
          <div
            aria-hidden="true"
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: open ? "var(--color-chip-bg)" : "#F5F1EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: open ? "var(--color-accent)" : "var(--color-subtle)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s, background 0.2s, color 0.2s",
            }}
          >
            <IconChevronDown size={14} />
          </div>
        </div>
      </button>

      <div
        style={{
          maxHeight: open ? 600 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div
          style={{
            padding: "0 1.25rem 1.25rem",
            paddingLeft: "calc(1.25rem + 40px + 1rem)",
          }}
        >
          <div
            style={{
              height: "1.5px",
              background: "var(--color-border)",
              marginBottom: "1rem",
            }}
          />
          {Array.isArray(contribution) ? (
            <ul
              style={{
                fontSize: 13,
                color: "var(--color-muted)",
                lineHeight: 1.7,
                marginBottom: "1rem",
                paddingLeft: "1.1rem",
              }}
            >
              {contribution.map((point, i) => (
                <li key={i} style={{ marginBottom: i < contribution.length - 1 ? "0.5rem" : 0 }}>
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p
              style={{
                fontSize: 13,
                color: "var(--color-muted)",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              {contribution}
            </p>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {highlightTags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  background: "var(--color-chip-bg)",
                  color: "var(--color-accent-dk)",
                  padding: "4px 10px",
                  borderRadius: 100,
                }}
              >
                {tag}
              </span>
            ))}
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  background: "#F5F1EE",
                  color: "var(--color-muted)",
                  padding: "4px 10px",
                  borderRadius: 100,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
