import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        href="/"
        aria-label="rubini.dev – go to homepage"
        style={{ display: "flex", alignItems: "center", lineHeight: 0 }}
      >
        <Image
          src="/rubini_logo_v1.png"
          alt="rubini.dev"
          width={200}
          height={200}
          priority
          style={{ objectFit: "contain" }}
        />
      </Link>

      <nav
        aria-label="Primary navigation"
        style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
      >
        <a
          href="#highlights"
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--color-muted)",
            cursor: "pointer",
          }}
        >
          Work
        </a>
        <a
          href="#skills"
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--color-muted)",
            cursor: "pointer",
          }}
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
