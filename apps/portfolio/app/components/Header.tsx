export default function Header() {
  return (
    <header
      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3.5rem" }}
    >
      <div
        style={{ fontWeight: 700, fontSize: 15, color: "var(--color-text)", letterSpacing: "-0.02em" }}
      >
        rubini<span style={{ color: "var(--color-accent)" }}>.</span>dev
      </div>

      <nav aria-label="Primary navigation" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <a
          href="#highlights"
          style={{ fontSize: 14, fontWeight: 500, color: "var(--color-muted)", cursor: "pointer" }}
        >
          Work
        </a>
        <a
          href="#skills"
          style={{ fontSize: 14, fontWeight: 500, color: "var(--color-muted)", cursor: "pointer" }}
        >
          Skills
        </a>
        <a
          href="mailto:rubini.sde@gmail.com"
          style={{
            background: "var(--color-text)",
            color: "var(--color-bg)",
            padding: "10px 22px",
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            border: "none",
            textDecoration: "none",
          }}
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
