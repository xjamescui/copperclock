import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  daisyui: {
    prefix: 'dsy-',
    logs: false,
    themes: ['bumblebee']
  },
  plugins: [daisyui, typography]
} satisfies Config;
