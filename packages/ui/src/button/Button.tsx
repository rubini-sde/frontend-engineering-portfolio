"use client";

import { ButtonProps } from "./Button.types";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none cursor-pointer";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
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
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  medium: "text-sm px-3.5 py-2",
  large: "text-sm px-4 py-2.5",
  xlarge: "text-base px-5 py-3",
  "2xlarge": "text-base px-6 py-3.5",
};

const iconOnlySizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  medium: "p-2",
  large: "p-2.5",
  xlarge: "p-3",
  "2xlarge": "p-3.5",
};

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = "primary",
    size = "medium",
    icons = "left",
    states = "normal",
    onClick,
    sxProps,
    ariaLabel,
  } = props;

  const sizeClass = icons === "only" ? iconOnlySizeClasses[size] : sizeClasses[size];
  const className = `${base} ${variantClasses[variant]} ${sizeClass}`;

  return (
    <button
      className={className}
      onClick={onClick}
      style={sxProps}
      aria-label={ariaLabel}
      disabled={states === "disabled"}
    >
      {children}
    </button>
  );
};
