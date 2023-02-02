/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        pastel: {
          primary: "#0b0d75",

          secondary: "#00008b",

          accent: "#000",

          neutral: "#22332200",

          "base-100": "#FFF",

          info: "#3ABFF8",

          success: "#22c55e",

          warning: "#facc15",

          error: "#880808",
        },
      },
      "black",
    ],
  },

  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],

  theme: {
    // colors: {
    //   primary: "#0B0D75",
    //   white: "#FFFFFF",
    //   extra_extra_light_grey: "#F5F8FA",
    //   extra_light_grey: "#E1E8ED",
    //   light_grey: "#AAB8C2",
    //   dark_grey: "#657786",
    //   black: "#14171A",
    //   red: "#880808",
    //   transparent: "#22332200",
    //   blue: "#00008B",
    // },
    extend: {},
  },
};
