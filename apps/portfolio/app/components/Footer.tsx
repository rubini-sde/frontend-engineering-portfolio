import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

const socials = [
  {
    href: "https://linkedin.com/in/rubini",
    label: "LinkedIn profile",
    icon: <IconBrandLinkedin size={18} aria-hidden="true" />,
  },
  {
    href: "https://github.com/rubini",
    label: "GitHub profile",
    icon: <IconBrandGithub size={18} aria-hidden="true" />,
  },
  {
    href: "mailto:rubini.sde@gmail.com",
    label: "Send email",
    icon: <IconMail size={18} aria-hidden="true" />,
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1C1917",
        borderRadius: 28,
        padding: "2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
        marginTop: "1rem",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#FEF9F3",
            marginBottom: "0.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Ready to build together?
        </h2>
        <p style={{ fontSize: 14, color: "#A8A09A" }}>
          Open to Senior · Staff · Lead roles
        </p>
      </div>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        {socials.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FEF9F3",
              textDecoration: "none",
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
