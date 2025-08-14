import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add our custom colors under the 'extend' key
      colors: {
        'th-background': 'hsl(238, 27%, 12%)', // Main page background
        'th-background-hover': 'hsl(238, 28%, 18%)', // Lighter hover background
        'th-border': 'hsl(242, 10%, 20%)', // Primary border color
        'th-text-muted': 'hsl(242, 3%, 55%)', // Secondary/muted text color
        'th-accent-purple': '#7B7BF0', // Accent for focus states, etc.
        'th-accent-pink': '#FF78C9',
        'th-accent-cyan': '#3ADEE6',
        'th-accent-violet': '#9B7DD9',
      },
      // Add our custom spacing values
      spacing: {
        'sidebar-width': '225px', // Fixed width for the sidebar
      },
      // Define a custom font family
      fontFamily: {
        // We will link this to the actual font file in the next step
        display: ['var(--font-gt-america)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;