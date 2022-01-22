import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    green: {
      300: "#93D7AF",
      400: "#27AE60",
      500: "#168821",
    },
    gray: {
      300: "#F5F5F5",
      400: "#E0E0E0",
      500: "#999999",
      600: "#828282",
      700: "#333333",
    },
    red: {
      300: "#EB5757",
      400: "#E60000",
    },
    yellow: {
      400: "#FFCD07",
    },
    blue: {
      400: "#155BCB",
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    styles: {
      global: {
        body: {
          bg: "white",
          color: "gray.400",
        },
      },
    },
  },
});
