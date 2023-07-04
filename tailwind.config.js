/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          light: '#def7ec',
          DEFAULT: '#046b1b',
          dark: '#046c4e'
        },
        blue: {
          light: '#94c1e6',
          DEFAULT: '#0e76bc',
          dark: '#283891',
        },
        purple: {
          light : '#b19cd9',
          DEFAULT : '#283891',
          dark : '#7e3af2',
        },
        brown: {
          light: '#e6b994',
          DEFAULT: '#bc540e',
          dark: '#843225',
        },
        orange: {
          light: '#e6b994',
          DEFAULT: '#bc540e',
          dark: '#843225',
        },
        red: {
          light: "#ffaeae",
          DEFAULT: '#843225',
          error: '#DB0000',
        },
        black: {
          light: '#242526',
          DEFAULT: '#1b1b1b',
        },
        white: {
          DEFAULT: '#ffffff',
          dark: '#f5f5f5',
        },
        grey: {
          light: '#eaeaea',
          DEFAULT: '#d4d4d4',
          dark: '#484a4d',
        },
      },
      minHeight: {
        '2vh':'2vh',
        '2.5vh': '2.5vh',
        '5vh': '5vh',
        '7.5vh': '7.5vh',
        '10vh': '10vh',
        '25vh': '25vh',
        '40vh': '40vh',
        '60vh': '60vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '87.5vh': '87.5vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
      minWidth: {
        '10vh': '10vh',
        '25vh': '25vh',
        '40vh': '40vh',
        '60vh': '60vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
    },
  },
  variants: {
    extend: {
      animation:['hover']
    },
  },
  plugins: [],
}

