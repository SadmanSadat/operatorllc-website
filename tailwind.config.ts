import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        operator: {
          navy: '#0A192F',
          steel: '#8892B0',
          orange: '#FF6B35',
          cream: '#F8F9FA',
          charcoal: '#112240'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace']
      },
      keyframes: {
        'split-reveal': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'split-reveal': 'split-reveal 0.8s ease forwards'
      }
    }
  },
  plugins: []
};

export default config;
