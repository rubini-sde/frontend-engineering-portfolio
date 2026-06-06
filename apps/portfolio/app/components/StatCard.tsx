interface StatCardProps {
  value: string;
  suffix?: string;
  label: string;
}

export default function StatCard({ value, suffix, label }: StatCardProps) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        borderRadius: 20,
        border: "1.5px solid var(--color-border)",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          fontSize: 36,
          fontWeight: 700,
          lineHeight: 1,
          color: "var(--color-text)",
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        {value}
        {suffix && (
          <span style={{ color: "var(--color-accent)" }}>{suffix}</span>
        )}
      </div>
      <div style={{ fontSize: 13, color: "var(--color-muted)" }}>{label}</div>
    </div>
  );
}
