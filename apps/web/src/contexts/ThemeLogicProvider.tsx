import { createContext } from "react";

import useToggleTheme, { initTheme, UseToggleThemeOutput } from "@/hooks/useToggleTheme";

export const ThemeContext = createContext<UseToggleThemeOutput>(initTheme);

const ThemeLogicProvider = ({ children }: any) => {
  const theme = useToggleTheme();
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeLogicProvider;
