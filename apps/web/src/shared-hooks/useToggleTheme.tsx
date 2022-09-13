import { useLocalStorage } from "usehooks-ts";
import { DefaultTheme } from "styled-components";

import lightTheme from "@/src/styles/lightTheme";
import darkTheme from "@/src/styles/darkTheme";

// const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

export enum ThemeMode {
  "dark",
  "light",
}

export interface UseToggleThemeOutput {
  isDarkMode: boolean;
  isLightMode: boolean;
  themeMode: ThemeMode;
  themeModeStyles: DefaultTheme;
  setThemeMode: (theme: ThemeMode) => void;
}

const getThemeStyle = (theme: ThemeMode) => {
  if (theme === ThemeMode.dark) {
    return darkTheme;
  }
  return lightTheme;
};

const useToggleTheme = (defaultValue?: ThemeMode): UseToggleThemeOutput => {
  // const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [themeMode, setThemeMode] = useLocalStorage("theme-mode", defaultValue ?? ThemeMode.dark);

  // useUpdateEffect(() => {
  //   useToggleTheme(isDarkOS ? ThemeMode.dark : themeMode);
  // }, [isDarkOS]);

  return {
    isDarkMode: themeMode === ThemeMode.dark,
    isLightMode: themeMode === ThemeMode.light,
    themeMode,
    themeModeStyles: getThemeStyle(themeMode),
    setThemeMode: (theme: ThemeMode) => setThemeMode(theme),
  };
};

export const initTheme: UseToggleThemeOutput = {
  isDarkMode: true,
  isLightMode: false,
  themeMode: ThemeMode.dark,
  themeModeStyles: darkTheme,
  setThemeMode: () => {},
};

export default useToggleTheme;
