/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0A192F',  // Deep navy
          light: '#112240', // Lighter navy
          accent: '#64FFDA', // Mint green
          muted: '#8892B0', // Muted blue-gray
          hover: '#233554', // Hover state blue
        },
        secondary: {
          dark: '#1E293B',
          light: '#334155',
          accent: '#94A3B8',
        },
        text: {
          primary: '#E2E8F0',
          secondary: '#94A3B8',
          accent: '#64FFDA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(100, 255, 218, 0.15)',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
