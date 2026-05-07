import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "link", "linkgray", "destructive"],
    },
    size: {
      control: "select",
      options: ["medium", "large", "xlarge", "2xlarge"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Button", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Button", variant: "secondary" },
};

export const Tertiary: Story = {
  args: { children: "Button", variant: "tertiary" },
};

export const Destructive: Story = {
  args: { children: "Delete", variant: "destructive" },
};

export const Disabled: Story = {
  args: { children: "Button", variant: "primary", disabled: true },
};

export const IconOnly: Story = {
  args: { leftIcon: "★", "aria-label": "Favourite" },
};

export const WithLeftIcon: Story = {
  args: { children: "Add item", leftIcon: "+" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(["primary", "secondary", "tertiary", "link", "linkgray", "destructive"] as const).map(
        (variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        )
      )}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {(["medium", "large", "xlarge", "2xlarge"] as const).map((size) => (
        <Button key={size} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};
