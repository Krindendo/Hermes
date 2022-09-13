import { DefaultTheme } from "styled-components";
import colors from "./baseColor";

const darkTheme: DefaultTheme = {
  palette: {
    primary: {
      main: colors.gray.B700,
      light: "",
      dark: "",
      contrastText: "",
    },
    secondary: {
      main: "",
      light: "",
      dark: "",
      contrastText: "",
    },
    error: {
      main: colors.red[700],
      light: colors.red[400],
      dark: colors.red[800],
      contrastText: colors.gray.A000,
    },
    warning: {
      main: colors.orange[800],
      light: colors.orange[900],
      dark: colors.orange[500],
      contrastText: colors.gray.A000,
    },
    info: {
      main: colors.lightBlue[700],
      light: colors.lightBlue[500],
      dark: colors.lightBlue[900],
      contrastText: colors.gray.A000,
    },
    success: {
      main: colors.green[800],
      light: colors.green[900],
      dark: colors.green[500],
      contrastText: colors.gray.A000,
    },
    common: {
      black: colors.gray.A100,
      white: colors.gray.A000,
    },
    text: {
      primary: "",
      secondary: "",
      disabled: "",
    },
    background: {
      paper: colors.gray.A000,
      default: colors.gray.A000,
    },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [],
};

export default darkTheme;
