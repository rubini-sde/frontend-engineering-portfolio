import type { ReactNode } from "react";

interface AboutChipProps {
  icon: ReactNode;
  label: string;
  variant?: "default" | "cred";
}

const styles = {
  default: {
    background: "var(--color-bg)",
    border: "1.5px solid var(--color-border)",
    color: "var(--color-muted)",
  },
  cred: {
    background: "#FEF3C7",
    border: "1.5px solid #FDE68A",
    color: "#92400E",
  },
};

export default function AboutChip({ icon, label, variant = "default" }: AboutChipProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        borderRadius: 100,
        padding: "6px 14px",
        fontSize: 12,
        fontWeight: 500,
        ...styles[variant],
      }}
    >
      {icon}
      {label}
    </span>
  );
}
