module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#50b5ffcc',
        'gray-main': '#e4e6eb'
      },
      boxShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        "sd-main": [
          '0 2px 5px 0 rgb(0 0 0 / 16%)',
          '0 2px 10px 0 rgb(0 0 0 / 12%)'
        ]
      }
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1365px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',

    },
  },
  plugins: [],
}
