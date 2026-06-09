import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  children: ReactNode;
}

export default function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--color-subtle)",
        marginBottom: "1rem",
      }}
    >
      {children}
    </h2>
  );
}
