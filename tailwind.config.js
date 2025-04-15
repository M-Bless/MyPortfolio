module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px", // Custom screen size breakpoint
      },
      spacing:{
        "big":"48rem"
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"], // Extended font family
      },
      height: {
        '1/2-screen-mobile': '50vh', // Custom height for mobile screens (50% of the viewport height)
      },
    },
  },
  plugins: [],
}
