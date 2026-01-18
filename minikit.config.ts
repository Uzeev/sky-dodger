import { defineConfig } from "minikit";

export default defineConfig({
  miniapp: {
    name: "Sky Explorer ✈️",
    description: "Explore the skies in a retro pixel-art adventure, dodging meteors and soaring through clouds.",
    url: "https://sky-explorer.vercel.app",
    icon: "/icon.png",
    screenshots: ["/screenshot.png"],
    tags: ["game", "arcade", "pixelart", "explorer"],
    version: "1.0.0",
  },
});
