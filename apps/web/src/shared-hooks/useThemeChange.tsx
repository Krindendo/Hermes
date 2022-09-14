import { useLocalStorage, useMediaQuery, useUpdateEffect } from "usehooks-ts";
import { DefaultTheme } from "styled-components";

import lightTheme from "@/src/styles/lightTheme";
import darkTheme from "@/src/styles/darkTheme";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

export enum ThemeMode {
  "light",
  "dark",
}

export interface UseChangeThemeOutput {
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

export const useThemeChange = (defaultValue?: ThemeMode): UseChangeThemeOutput => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [theme, setTheme] = useLocalStorage("theme-mode", defaultValue ?? ThemeMode.dark);

  useUpdateEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useThemeChange(isDarkOS ? ThemeMode.dark : theme);
  }, [isDarkOS]);

  return {
    isDarkMode: theme === ThemeMode.dark,
    isLightMode: theme === ThemeMode.light,
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
  themeMode: ThemeMode.dark,
  themeModeStyles: darkTheme,
  setThemeMode: () => {},
};
