import { type JSX } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const cardVariants = cva("rounded-lg border transition-colors", {
  variants: {
    variant: {
      default: "border-neutral-200 bg-white hover:border-indigo-300",
      elevated: "border-transparent bg-white shadow-md hover:shadow-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type CardProps = VariantProps<typeof cardVariants> & {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
};

export function Card({ className, title, children, href, variant }: CardProps): JSX.Element {
  return (
    <a
      className={cn(cardVariants({ variant }), className)}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
