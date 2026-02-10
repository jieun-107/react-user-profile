import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import SettingProvider from "./context/setting/SettingProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SettingProvider>
      <App />
    </SettingProvider>
  </StrictMode>
);
