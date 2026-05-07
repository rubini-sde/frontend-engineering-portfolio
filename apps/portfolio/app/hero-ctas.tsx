"use client";

import { Button } from "@repo/ui/button";

export function HeroCtas() {
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-2">
      <Button
        variant="primary"
        size="large"
        onClick={() => {
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        View Projects
      </Button>
      <Button
        variant="secondary"
        size="large"
        onClick={() => {
          window.location.href = "mailto:rubini.sde@gmail.com";
        }}
      >
        Get in Touch
      </Button>
    </div>
  );
}
