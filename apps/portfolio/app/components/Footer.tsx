import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

const socials = [
  {
    href: "https://www.linkedin.com/in/rubini-d-49225491/",
    label: "LinkedIn profile, opens in new tab",
    icon: <IconBrandLinkedin size={18} aria-hidden="true" />,
    newTab: true,
  },
  {
    href: "https://github.com/rubini-sde",
    label: "GitHub profile, opens in new tab",
    icon: <IconBrandGithub size={18} aria-hidden="true" />,
    newTab: true,
  },
  {
    href: "mailto:rubini.sde@gmail.com",
    label: "Send email",
    icon: <IconMail size={18} aria-hidden="true" />,
    newTab: false,
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
          Open to Senior Software Engineer roles
        </p>
      </div>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        {socials.map(({ href, label, icon, newTab }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
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
