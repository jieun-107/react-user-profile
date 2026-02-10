import { createContext } from "react";

export const SettingContext = createContext<PreferencesContextType | null>(
  null,
);
export const SettingContextAction =
  createContext<PreferencesContextActionType | null>(null);
