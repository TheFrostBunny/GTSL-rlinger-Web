// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ThemeModeProvider from "./themes/ThemeModeProvider";
import "./i18n";

export function Root() {

  return (
      <BrowserRouter>
        <ThemeModeProvider>
          <AppRoutes />
        </ThemeModeProvider>
      </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);