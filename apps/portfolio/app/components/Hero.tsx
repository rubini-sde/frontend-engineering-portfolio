import { IconDownload, IconArrowRight, IconMapPin } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 260px",
        gap: "3rem",
        alignItems: "center",
        marginBottom: "3rem",
      }}
      className="hero-grid"
    >
      {/* Left — text content */}
      <div>
        {/* Availability chip */}
        <div
          role="status"
          aria-label="Currently open to new roles"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--color-chip-bg)",
            borderRadius: 100,
            padding: "7px 16px",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--color-accent-dk)",
            marginBottom: "1.5rem",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--color-accent)",
              display: "inline-block",
            }}
          />
          Open to new roles
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
            color: "var(--color-text)",
          }}
        >
          Building the web,{" "}
          <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>
            one pixel
          </em>{" "}
          at a time.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 15,
            color: "var(--color-muted)",
            lineHeight: 1.75,
            marginBottom: "2rem",
            maxWidth: 400,
          }}
        >
          Senior Frontend Engineer with 7 years crafting fast, accessible, and
          beautifully designed products at scale.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="/resume.pdf"
            aria-label="Download resume (PDF)"
            style={{
              background: "var(--color-accent)",
              color: "#FEF9F3",
              fontWeight: 600,
              fontSize: 13,
              padding: "12px 22px",
              borderRadius: 100,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <IconDownload size={16} aria-hidden="true" />
            Resume
          </a>
          <a
            href="#highlights"
            style={{
              background: "var(--color-bg)",
              color: "var(--color-text)",
              fontWeight: 600,
              fontSize: 13,
              padding: "12px 22px",
              borderRadius: 100,
              border: "1.5px solid var(--color-border-md)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            See my work
            <IconArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Right — avatar card */}
      <div
        aria-hidden="true"
        style={{
          background: "var(--color-chip-bg)",
          borderRadius: 32,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2.5rem 1.5rem",
          gap: 12,
        }}
      >
        {/* Initials circle */}
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: "#F5C2AF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 30,
            color: "var(--color-accent-dk)",
          }}
        >
          R
        </div>

        <div style={{ fontWeight: 700, fontSize: 15, color: "var(--color-text)" }}>
          Rubini
        </div>

        <div
          style={{
            fontSize: 12,
            color: "var(--color-muted)",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Senior Frontend Engineer
          <br />
          React · Next.js · TypeScript
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 11,
            color: "var(--color-subtle)",
          }}
        >
          <IconMapPin size={13} aria-hidden="true" />
          Redmond, WA
        </div>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
