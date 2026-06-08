import {
  IconMapPin,
  IconBuildingStore,
  IconSearch,
  IconCertificate,
} from "@tabler/icons-react";
import Card from "./Card";
import AboutChip from "./AboutChip";

const chips = [
  {
    icon: <IconMapPin size={14} aria-hidden="true" />,
    label: "Greater Seattle Area",
  },
  {
    icon: <IconBuildingStore size={14} aria-hidden="true" />,
    label: "Currently at Costco",
  },
  {
    icon: <IconSearch size={14} aria-hidden="true" />,
    label: "Open to Senior SDE roles",
  },
  {
    icon: <IconCertificate size={14} aria-hidden="true" />,
    label: "UW JS Certificate",
  },
];

const strong = { color: "var(--color-text)", fontWeight: 600 };
const accent = { color: "var(--color-accent)", fontWeight: 600 };

export default function AboutMe() {
  return (
    <Card
      style={{ borderRadius: 28, padding: "2rem 2.5rem", marginBottom: "3rem" }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-subtle)",
          marginBottom: "1rem",
        }}
      >
        About me
      </div>
      <p
        style={{
          fontSize: 15,
          color: "var(--color-muted)",
          lineHeight: 1.85,
          marginBottom: "1.5rem",
        }}
      >
        I&apos;m a Senior Frontend Engineer based in{" "}
        <span style={strong}>Redmond, WA</span> with 8+ years of experience
        building products that are{" "}
        <span style={accent}>fast, accessible, and built to last</span>. Most
        recently at Costco, I&apos;ve owned the full frontend stack — from
        architecting the <span style={strong}>Forge design system</span> to
        cutting LCP nearly in half and building the observability pipeline
        engineers rely on in production.
        <br />
        <br />I care about the craft: clean component APIs, design systems that
        scale, and the kind of attention to detail that makes an experience feel{" "}
        <span style={accent}>right</span> — even when users can&apos;t say why.
        I do my best work close to product, across disciplines, on problems with
        real user impact.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {chips.map((chip) => (
          <AboutChip key={chip.label} {...chip} />
        ))}
      </div>
    </Card>
  );
}
