// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          fadeInRight: 'fadeInRight 1s ease-out forwards',
          fadeInLeft: 'fadeInLeft 1s ease-out forwards',
        },
        keyframes: {
          fadeInRight: {
            '0%': { opacity: '0', transform: 'translateX(20px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          fadeInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-20px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
        },
      },
    },
    plugins: [],
  };
  