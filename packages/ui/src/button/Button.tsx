"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed",
        secondary:
          "border border-indigo-700 text-indigo-700 bg-transparent rounded-lg hover:bg-indigo-50 focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 disabled:border-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed",
        tertiary:
          "text-indigo-700 rounded-lg hover:bg-indigo-50 focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 disabled:text-neutral-400 disabled:cursor-not-allowed",
        link: "text-indigo-700 underline hover:text-indigo-800 focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 disabled:text-neutral-400 disabled:cursor-not-allowed",
        linkgray:
          "text-neutral-900 underline hover:text-neutral-700 focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:text-neutral-400 disabled:cursor-not-allowed",
        destructive:
          "bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-600 focus:ring-offset-2 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed",
      },
      size: {
        medium: "text-sm px-3.5 py-2",
        large: "text-sm px-4 py-2.5",
        xlarge: "text-base px-5 py-3",
        "2xlarge": "text-base px-6 py-3.5",
      },
      icons: {
        left: "",
        right: "",
        both: "",
        only: "",
      },
    },
    compoundVariants: [
      { icons: "only", size: "medium", class: "p-2" },
      { icons: "only", size: "large", class: "p-2.5" },
      { icons: "only", size: "xlarge", class: "p-3" },
      { icons: "only", size: "2xlarge", class: "p-3.5" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
      icons: "left",
    },
  }
);

export type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  states?: "normal" | "hover" | "focus" | "disabled";
  onClick?: () => void;
  sxProps?: React.CSSProperties;
  ariaLabel?: string;
  className?: string;
};

export const Button = ({
  children,
  variant,
  size,
  icons,
  states,
  onClick,
  sxProps,
  ariaLabel,
  className,
}: ButtonProps) => (
  <button
    className={cn(buttonVariants({ variant, size, icons }), className)}
    onClick={onClick}
    style={sxProps}
    aria-label={ariaLabel}
    disabled={states === "disabled"}
  >
    {children}
  </button>
);
