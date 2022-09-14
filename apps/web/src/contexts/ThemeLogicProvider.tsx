import { createContext, ReactNode, useContext } from "react";

import { useThemeChange, initTheme, UseChangeThemeOutput } from "@/src/shared-hooks/useThemeChange";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext<UseChangeThemeOutput>(initTheme);

interface ThemeLogicProviderProps {
  children: ReactNode;
}

export const ThemeLogicProvider = ({ children }: ThemeLogicProviderProps) => {
  const theme = useThemeChange();

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme.themeModeStyles}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
