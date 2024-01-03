/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "vh-screen-navbar": "calc(100vh - 64px)", // Replace '64px' with your navbar height value
      },
      colors: {
        primary: "#f48023",
      },
      boxShadow: {
        "custom-shadow": "10px 10px 5px 5px rgba(0, 0, 0, 0.25)",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xs: "380px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
