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
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neumorphic': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neumorphic-inset': 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff',
        'neumorphic-sm': '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
        'neumorphic-lg': '12px 12px 24px #d1d9e6, -12px -12px 24px #ffffff',
        'neumorphic-ultra': '20px 20px 40px #c8d4e6, -20px -20px 40px #ffffff',
        'neumorphic-deep': '16px 16px 32px #c8d4e6, -16px -16px 32px #ffffff',
        'neumorphic-medium': '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
        'grain': 'grain 8s steps(10) infinite',
        'grain-slow': 'grain 12s steps(15) infinite',
        'grain-quantum': 'grain-quantum 10s steps(20) infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        'grain-quantum': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '10%': { transform: 'translate(-3%, -7%) rotate(36deg)' },
          '20%': { transform: 'translate(-10%, 3%) rotate(72deg)' },
          '30%': { transform: 'translate(5%, -15%) rotate(108deg)' },
          '40%': { transform: 'translate(-3%, 20%) rotate(144deg)' },
          '50%': { transform: 'translate(-10%, 7%) rotate(180deg)' },
          '60%': { transform: 'translate(10%, -2%) rotate(216deg)' },
          '70%': { transform: 'translate(2%, 10%) rotate(252deg)' },
          '80%': { transform: 'translate(2%, 25%) rotate(288deg)' },
          '90%': { transform: 'translate(-7%, 7%) rotate(324deg)' },
        },
        hologram: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1) rotateY(0deg)',
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05) rotateY(180deg)',
          },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)',
          },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}