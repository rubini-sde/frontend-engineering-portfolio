import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../../../packages/ui/src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    // Strip Next.js "use client" / "use server" directives — Vite doesn't understand them
    const stripDirectives = {
      name: "strip-next-directives",
      transform(code: string) {
        return code.replace(/^['"](use client|use server)['"]\s*;?\s*/m, "");
      },
    };
    config.plugins = [...(config.plugins ?? []), tailwindcss(), stripDirectives];
    return config;
  },
};

export default config;
