/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        card: 'hsl(var(--card))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
      },
      animation: {
        'meteor': 'meteor 5s linear infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'animate-float': 'float 6s ease-in-out infinite',
        'animate-fade-in': 'fade-in 0.7s ease-out forwards',
        'animate-fade-in-delay-1': 'fade-in 0.7s ease-out 0.2s forwards',
        'animate-fade-in-delay-2': 'fade-in 0.7s ease-out 0.4s forwards',
        'animate-fade-in-delay-3': 'fade-in 0.7s ease-out 0.6s forwards',
        'animate-fade-in-delay-4': 'fade-in 0.7s ease-out 0.8s forwards',
      },
      keyframes: {
        meteor: {
          '0%': {
            transform: 'rotate(215deg) translateX(0)',
            opacity: '1',
          },
          '70%': {
            opacity: '1',
          },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'float':{
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'fade-in': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
