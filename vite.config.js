//@ts-ignore
import { sveltekit } from "@sveltejs/kit/vite";

//@ts-ignore
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    https: false,
  },
};

export default config;
