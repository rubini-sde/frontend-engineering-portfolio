export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "destructive"
  | "link"
  | "linkgray";

export type ButtonSize = "medium" | "large" | "xlarge" | "2xlarge";

export type ButtonIcons = "left" | "right" | "both" | "only";

export type ButtonStates = "normal" | "hover" | "focus" | "disabled";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icons?: ButtonIcons;
  states?: ButtonStates;
  onClick?: () => void;
  sxProps?: React.CSSProperties;
  ariaLabel?: string;
};
