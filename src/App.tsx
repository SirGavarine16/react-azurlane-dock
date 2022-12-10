import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { UIContext } from "./contexts";
import { DarkTheme, LightTheme } from "./themes";
import { MainLayout } from "./layouts";
import { Home, NotFound, Shipgirl } from "./pages";

const App = () => {
  const { theme } = useContext(UIContext);

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='shipgirl/:name' element={<Shipgirl />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
