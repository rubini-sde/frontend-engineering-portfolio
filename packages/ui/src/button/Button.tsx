"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 focus-visible:ring-indigo-700 disabled:bg-neutral-200 disabled:text-neutral-400",
        secondary:
          "border border-indigo-700 text-indigo-700 bg-transparent rounded-lg hover:bg-indigo-50 focus-visible:ring-indigo-700 disabled:border-neutral-200 disabled:text-neutral-400",
        tertiary:
          "text-indigo-700 rounded-lg hover:bg-indigo-50 focus-visible:ring-indigo-700 disabled:text-neutral-400",
        link: "text-indigo-700 underline hover:text-indigo-800 focus-visible:ring-indigo-700 disabled:text-neutral-400",
        linkgray:
          "text-neutral-900 underline hover:text-neutral-700 focus-visible:ring-neutral-400 disabled:text-neutral-400",
        destructive:
          "bg-red-600 text-white rounded-lg hover:bg-red-700 focus-visible:ring-red-600 disabled:bg-neutral-200 disabled:text-neutral-400",
      },
      size: {
        medium: "text-sm px-3.5 py-2",
        large: "text-sm px-4 py-2.5",
        xlarge: "text-base px-5 py-3",
        "2xlarge": "text-base px-6 py-3.5",
      },
      iconOnly: {
        true: "min-w-11",
        false: "",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      { iconOnly: true, size: "medium", class: "p-2" },
      { iconOnly: true, size: "large", class: "p-2.5" },
      { iconOnly: true, size: "xlarge", class: "p-3" },
      { iconOnly: true, size: "2xlarge", class: "p-3.5" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
      iconOnly: false,
      fullWidth: false,
    },
  }
);

type BaseButtonProps = Omit<
  React.ComponentPropsWithRef<"button">,
  "children" | "aria-label"
> &
  Omit<VariantProps<typeof buttonVariants>, "iconOnly"> & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

export type ButtonProps = BaseButtonProps &
  (
    | { children: React.ReactNode; "aria-label"?: string }
    | { children?: never; "aria-label": string }
  );

export const Button = ({
  variant,
  size,
  fullWidth,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: ButtonProps) => {
  const iconOnly = !children && (!!leftIcon || !!rightIcon);
  return (
    <button
      type="button"
      {...props}
      className={cn(buttonVariants({ variant, size, iconOnly, fullWidth }), className)}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
