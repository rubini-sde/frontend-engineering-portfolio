import type { ReactNode } from "react";

interface AboutChipProps {
  icon: ReactNode;
  label: string;
}

export default function AboutChip({ icon, label }: AboutChipProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "var(--color-bg)",
        border: "1.5px solid var(--color-border)",
        borderRadius: 100,
        padding: "6px 14px",
        fontSize: 12,
        fontWeight: 500,
        color: "var(--color-muted)",
      }}
    >
      {icon}
      {label}
    </span>
  );
}
