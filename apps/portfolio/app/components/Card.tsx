import type { CSSProperties, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
}

export default function Card({ children, style }: CardProps) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        borderRadius: 20,
        border: "1.5px solid var(--color-border)",
        padding: "1.5rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
