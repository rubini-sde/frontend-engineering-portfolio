export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "destructive" | "links";
  size?: "medium" | "large" | "xlarge" | "2xlarge";
  icons?: "left" | "right" | "both" | "only";
  states?: "normal" | "hover" | "focus" | "disabled";
  onClick?: () => void;
  sxProps?: React.CSSProperties;
  ariaLabel?: string;
};
