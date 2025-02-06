import { useEffect, useState } from "react";

import styles from "./theme.module.scss";
import { MoonIcon, SunIcon } from "./ThemeIcons";

const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? "light" : "Dark";

  // className={styles.icon}
  const ThemeIcon = () => {
    return isDark ? SunIcon : MoonIcon;
  };
  // const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.themeSwitcherProps} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>

      {ThemeIcon()}
    </div>
  );
};
export default ThemeSwitcher;
