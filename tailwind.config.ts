import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',
        gold: '#C9A25B',
        cloud: '#F4F6F8',
        canvas: '#E1E5EC',
        sub: '#5A6470',
        border: '#E2E5EA',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        dm: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
