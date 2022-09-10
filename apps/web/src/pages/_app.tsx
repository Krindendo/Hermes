/* eslint react/jsx-props-no-spreading: "off" */

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import lightTheme from "@/src/styles/lightTheme";
import GlobalStyle from "@/src/styles/globals";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
