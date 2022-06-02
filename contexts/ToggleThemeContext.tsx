import { createContext, FC, useContext } from "react";
import React from "react";

export type ToggleThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  children?: React.ReactNode;
};

const defaultToggleThemeContext = { isDark: false, toggleTheme: () => {} };

const ToggleThemeContext = createContext<ToggleThemeContextType>(
  defaultToggleThemeContext
);

type ToggleThemeProviderProps = ToggleThemeContextType;

export const ToggleThemeProvider: FC<ToggleThemeProviderProps> = ({
  children,
  isDark,
  toggleTheme,
}) => {
  return (
    <ToggleThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export const useToggleTheme = () => {
  const context = useContext(ToggleThemeContext);
  return context;
};
