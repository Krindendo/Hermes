import type { NextPage } from "next";
import { useContext } from "react";

import { ThemeContext } from "@/src/contexts/ThemeLogicProvider";
import { ThemeMode } from "@/hooks/useToggleTheme";
import Button from "@/ui/Button";

const Test: NextPage = () => {
  const themeContext = useContext(ThemeContext);
  const handleChangeTheme = (theme: ThemeMode) => {
    themeContext.setThemeMode(theme);
  };
  return (
    <div>
      <Button onClick={() => handleChangeTheme(ThemeMode.light)}>Light mode</Button>
      <Button onClick={() => handleChangeTheme(ThemeMode.dark)}>Dark mode</Button>
    </div>
  );
};

export default Test;
