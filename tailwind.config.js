/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  plugins: [require("@tailwindcss/line-clamp"),require("@tailwindcss/forms")],
  
  theme: {
    colors: {
      primary: "#0B0D75",
      white: "#FFFFFF",
      extra_extra_light_grey: "#F5F8FA",
      extra_light_grey: "#E1E8ED",
      light_grey: "#AAB8C2",
      dark_grey: "#657786",
      black: "#14171A",
      transparent: '#22332200',
      blue: "#00008B",
    },
    extend: {},
  },

};
