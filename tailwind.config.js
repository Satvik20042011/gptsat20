/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      // Custom gradients
      backgroundImage: {
        'radial-center': 'radial-gradient(circle at center, rgba(255,255,255,0.1), rgba(0,0,0,0.1))',
        'glow': 'radial-gradient(circle at center, rgba(255,255,255,0.2), transparent)',
      },
      // Opacity adjustments
      opacity: {
        '3': '0.03',
        '5': '0.05',
      },
      // Animation configurations
      animation: {
        pulse: 'pulse 10s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};
