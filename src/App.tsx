import {
  Button,
  createTheme,
  CssBaseline,
  Switch,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { darkPalette, lightPalette } from "./palettes";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme(darkMode ? darkPalette : lightPalette);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button>{darkMode ? "Dark Mode" : "Light Mode"}</Button>
      <Switch
        checked={darkMode}
        onClick={() => setDarkMode((prevState) => !prevState)}
      />
    </ThemeProvider>
  );
}

export default App;
