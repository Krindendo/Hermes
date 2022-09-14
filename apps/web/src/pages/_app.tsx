import type { AppProps } from "next/app";

import GlobalStyle from "@/src/styles/globals";
import { ThemeLogicProvider } from "@/src/contexts/ThemeLogicProvider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeLogicProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeLogicProvider>
  );
};

export default MyApp;
