import { DefaultTheme } from "styled-components";

export const baseColors = {
  blue: {
    100: "#dee3ea",
    200: "#b2bdcd",
    300: "#5d7290",
    600: "#323d4d",
    700: "#242c37",
    800: "#151a21",
    900: "#0b0e11",
  },
  red: {
    200: "",
  },
  orange: {
    200: "",
  },
  green: {
    200: "",
  },
  gray: {
    200: "",
  },
};

const theme: DefaultTheme = {
  colors: {
    primary: {
      main: baseColors.blue[100],
    },
  },
};

export default theme;
