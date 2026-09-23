import type { ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./darkTheme";

type ThemeModeProviderProps = {
  children: ReactNode;
};

export default function ThemeModeProvider({ children }: ThemeModeProviderProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}