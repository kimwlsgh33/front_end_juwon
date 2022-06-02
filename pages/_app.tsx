import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ToggleThemeProvider } from "../contexts";
import { darkTheme, GlobalStyles, lightTheme } from "../styles/styled";
import { useToggle } from "../hooks";
import { useCallback, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // const [dark, toggleTheme] = useToggle(false);
  const [dark, setDark] = useState<boolean>(false);
  const toggleTheme = useCallback(() => {
    setDark((dark) => !dark);
  }, []);

  return (
    <ToggleThemeProvider isDark={dark} toggleTheme={toggleTheme}>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />;
      </ThemeProvider>
    </ToggleThemeProvider>
  );
}

export default MyApp;
