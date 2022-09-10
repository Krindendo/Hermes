import "styled-components";

interface ColorTypes {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: ColorTypes;
      secondary: ColorTypes;
      error: ColorTypes;
      warning: ColorTypes;
      info: ColorTypes;
      success: ColorTypes;

      common: {
        black: string;
        white: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      background: {
        paper: string;
        default: string;
      };
    };
    shape: {
      borderRadius: number;
    };
    shadows: Arrow<string>;
  }
}
