import { useLocalStorage, useMediaQuery, useUpdateEffect } from "usehooks-ts";
import { DefaultTheme } from "styled-components";

import lightTheme from "@/src/styles/lightTheme";
import darkTheme from "@/src/styles/darkTheme";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

export type ThemeMode = "light" | "dark";

export interface UseChangeThemeOutput {
  isDarkMode: boolean;
  isLightMode: boolean;
  themeMode: ThemeMode;
  themeModeStyles: DefaultTheme;
  setThemeMode: (theme: ThemeMode) => void;
}

const getThemeStyle = (theme: ThemeMode) => {
  if (theme === "dark") {
    return darkTheme;
  }
  return lightTheme;
};

export const useThemeChange = (defaultValue: ThemeMode = "dark"): UseChangeThemeOutput => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [theme, setTheme] = useLocalStorage("theme-mode", defaultValue);

  useUpdateEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useThemeChange(isDarkOS ? "dark" : theme);
  }, [isDarkOS]);

  return {
    isDarkMode: theme === "dark",
    isLightMode: theme === "light",
    themeMode: theme,
    themeModeStyles: getThemeStyle(theme),
    setThemeMode: (_theme: ThemeMode) => {
      setTheme(_theme);
    },
  };
};

export const initTheme: UseChangeThemeOutput = {
  isDarkMode: true,
  isLightMode: false,
  themeMode: "dark",
  themeModeStyles: darkTheme,
  setThemeMode: () => {},
};
