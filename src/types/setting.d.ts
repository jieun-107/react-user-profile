interface UserPreferences {
  language: "ko" | "en" | "ja";
  fontSize: "small" | "medium" | "large";
  notifications: {
    email: boolean;
    push: boolean;
    desktop: boolean;
  };
  colorScheme: "system" | "light" | "dark";
}
interface PreferencesContextType {
  preferences: UserPreferences;
}
interface PreferencesContextActionType {
  updateLanguage: (language: UserPreferences["language"]) => void;
  updateFontSize: (size: UserPreferences["fontSize"]) => void;
  updateNotifications: (key: keyof UserPreferences["notifications"], value: boolena) => void;
  updateColorScheme: (scheme: UserPreferences["colorScheme"]) => void;
}