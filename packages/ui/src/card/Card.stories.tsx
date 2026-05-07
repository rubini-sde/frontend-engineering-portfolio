import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated"],
    },
  },
  args: {
    title: "Card Title",
    href: "https://example.com",
    children: "A short description of the card content goes here.",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: { variant: "default" },
};

export const Elevated: Story = {
  args: { variant: "elevated" },
};

export const BothVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      {(["default", "elevated"] as const).map((variant) => (
        <Card
          key={variant}
          variant={variant}
          title={variant.charAt(0).toUpperCase() + variant.slice(1)}
          href="https://example.com"
          className="w-64 p-5"
        >
          A short description of the card content goes here.
        </Card>
      ))}
    </div>
  ),
};
