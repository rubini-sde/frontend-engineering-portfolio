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
        fontSize: 18,
        fontWeight: 700,
        color: "var(--color-text)",
        marginBottom: "1.25rem",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}
