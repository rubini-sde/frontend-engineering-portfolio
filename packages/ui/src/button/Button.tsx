"use client";

import { ButtonProps } from "./Button.types";

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

  return (
    <button
      className={`btn ${variant} ${size} ${icons} ${states}`}
      onClick={onClick}
      style={sxProps}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
