import React, { createContext, useState } from "react";

// Create the context with default values
export const ThemeContext = createContext();

// Create a functional component to provide the theme context
export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
