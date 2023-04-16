/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      secondary: "Manrope",
      tertiary: "Poppins",
    },
    screens: {
      sm: "48px",
      md: "678px",
      lg: "890px",
      xl: "1100px",
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#323635",
        tertiary: "#FCF7F4",
      },
    },
  },
  plugins: [],
};
