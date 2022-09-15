import type { NextPage } from "next";

import { useThemeContext } from "@/src/contexts/ThemeLogicProvider";
import { ThemeMode } from "@/src/shared-hooks/useThemeChange";
import Button from "@/ui/Button";

const Test: NextPage = () => {
  const themeContext = useThemeContext();
  const handleChangeTheme = (theme: ThemeMode) => {
    themeContext.setThemeMode(theme);
  };
  return (
    <div>
      <Button onClick={() => handleChangeTheme("light")}>Light mode</Button>
      <Button onClick={() => handleChangeTheme("dark")}>Dark mode</Button>
    </div>
  );
};

export default Test;
