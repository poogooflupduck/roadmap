import { Button, useTheme } from "@geist-ui/core";
import { Moon, Sun } from "@geist-ui/icons";

const ThemeButton = ({ switchThemes }) => {
  const theme = useTheme();
  return (
    <Button
      onClick={switchThemes}
      icon={theme.type == "dark" ? <Moon /> : <Sun />}
      auto
    >
      {theme.type + " Mode"}
    </Button>
  );
};

export default ThemeButton;
