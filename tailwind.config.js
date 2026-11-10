/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          elevated: 'var(--color-elevated)',
          border: 'var(--color-border)',
          muted: 'var(--color-muted)',
          text: 'var(--color-text)',
          accent: 'var(--color-accent)',
          'accent-hover': 'var(--color-accent-hover)',
          'accent-glow': 'var(--color-accent-glow)',
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px var(--color-accent-glow)',
        'surface': '0 4px 20px -2px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
