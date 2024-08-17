/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      redHatMono: ["'Red Hat Mono'"],
      redHatText: ["'Red Hat Text'"],
      roboto: ["'Roboto'"],
    },
    colors: {
      primary: {
        50: "#f1e9f8",
        100: "#e2d3f1",
        200: "#c6a7e3",
        300: "#a97cd5",
        400: "#8d50c7",
        500: "#7024b9",
        600: "#5a1d94",
        700: "#43166f",
        800: "#2d0e4a",
        900: "#160725",
      },
      secondary: {
        50: "#e6e7e8",
        100: "#cdced2",
        200: "#9b9da4",
        300: "#6a6d77",
        400: "#383c49",
        500: "#060b1c",
        600: "#050916",
        700: "#040711",
        800: "#02040b",
        900: "#010206",
      },
      tertiary: {
        50: "#e7e8ea",
        100: "#cfd0d4",
        200: "#9fa1a9",
        300: "#6e727e",
        400: "#3e4353",
        500: "#0e1428",
        600: "#0b1020",
        700: "#080c18",
        800: "#060810",
        900: "#030408",
      },
      grey: {
        50: "#f0f0f1",
        100: "#e0e1e4",
        200: "#c1c3c8",
        300: "#a3a5ad",
        400: "#848791",
        500: "#656976",
        600: "#51545e",
        700: "#3d3f47",
        800: "#282a2f",
        900: "#141518",
      },
    },
    screens: {
      lgMobile: "480px",
      tablet: "844px",
      desktop: "1280px",
    },
  },
};
export const plugins = [];
