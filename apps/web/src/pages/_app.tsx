/* eslint react/jsx-props-no-spreading: "off" */

import type { AppProps } from "next/app";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/src/styles/globals";
import ThemeLogicProvider, { ThemeContext } from "@/src/contexts/ThemeLogicProvider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const theme = useContext(ThemeContext);

  return (
    <ThemeLogicProvider>
      <ThemeProvider theme={theme.themeModeStyles}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeLogicProvider>
  );
};

export default MyApp;
