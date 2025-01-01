import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        background: 'var(--pico-background-color)'
      }
    }
  },

  plugins: []
} satisfies Config;
