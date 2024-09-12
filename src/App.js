import Router from "./Router";
import { useContext } from "react";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { ThemeContext } from "./contexts/ThemeContext";
import { ModalContextProvider } from "./contexts/ModalContext";

function App() {
  const { theme,toggleTheme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={mode}>
      <ModalContextProvider>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Router />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
