import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Apple-inspired palette with subtle futuristic accents
        accent: {
          primary: '#0A84FF',      // Apple blue
          secondary: '#8E8E93',    // Gray
          success: '#34C759',      // Green
          warning: '#FF9500',      // Orange
          glow: '#5AC8FA',        // Light blue glow
        },
        dark: {
          base: '#000000',         // Pure black
          card: '#1C1C1E',         // Dark gray (Apple dark mode)
          elevated: '#2C2C2E',     // Elevated surface
          border: '#38383A',       // Subtle borders
        },
        light: {
          primary: '#FFFFFF',      // Pure white
          secondary: '#F2F2F7',    // Light gray background
          tertiary: '#E5E5EA',     // Lighter borders
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'glow-ring': 'glow-ring 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'glow-ring': {
          '0%': {
            boxShadow: '0 0 20px rgba(10, 132, 255, 0.3), 0 0 40px rgba(10, 132, 255, 0.1)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(10, 132, 255, 0.5), 0 0 80px rgba(10, 132, 255, 0.2)',
            transform: 'scale(1.02)',
          },
          '100%': {
            boxShadow: '0 0 20px rgba(10, 132, 255, 0.3), 0 0 40px rgba(10, 132, 255, 0.1)',
            transform: 'scale(1)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'subtle-glow': '0 0 30px rgba(10, 132, 255, 0.15)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
