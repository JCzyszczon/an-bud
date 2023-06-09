/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'none' },
        },
        bounceGallery: {
          '0%, 100%': { transform: 'translateY(-5%) translateX(-50%)' },
          '50%': { transform: 'translateY(0%) translateX(-50%)' },
        },
        spinB: {
          'to': { transform: 'rotate(-360deg)'},
        }
      },
      animation: {
        bounce: 'bounce 1.3s infinite',
        bounceGallery: 'bounceGallery 1.3s infinite',
        spin: 'spin 80s infinite',
        spin2: 'spin 55s infinite',
        spin3: 'spin 65s infinite',
        spin4: 'spin 45s infinite',
        spin5: 'spin 50s infinite',
        spin6: 'spinB 65s infinite',
      },
      fontFamily: {
        lato: ['"Lato"'],
        ptSans: ['"PT Sans"'],
      },
    },
  },
  plugins: [],
}

