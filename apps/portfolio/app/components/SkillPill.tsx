interface SkillPillProps {
  label: string;
  variant?: "primary" | "secondary";
}

export default function SkillPill({ label, variant = "secondary" }: SkillPillProps) {
  const isPrimary = variant === "primary";
  return (
    <li
      style={{
        background: isPrimary ? "var(--color-chip-bg)" : "var(--color-surface)",
        color: isPrimary ? "var(--color-accent-dk)" : "var(--color-muted)",
        border: isPrimary ? "none" : "1.5px solid var(--color-border)",
        borderRadius: 100,
        padding: "6px 16px",
        fontSize: 13,
        fontWeight: isPrimary ? 600 : 500,
        listStyle: "none",
      }}
    >
      {label}
    </li>
  );
}
