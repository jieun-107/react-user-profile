import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getInintialState = () => {
  const saved = localStorage.getItem("preferences");
  return (saved ? JSON.parse(saved) : {
    language: "ko",
    fontSize: "medium",
    notifications: {
      email: false,
      push: false,
      desktop: false,
    },
    colorScheme: "system",
  }) as UserPreferences;
}

const settingSlice = createSlice({
  name: "settingSlice",
  initialState: getInintialState(),
  reducers: {
    updateLanguage: (
      state,
      action: PayloadAction<UserPreferences["language"]>,
    ) => {
      state.language = action.payload;
    },
    updateFontSize: (
      state,
      action: PayloadAction<UserPreferences["fontSize"]>,
    ) => {
      state.fontSize = action.payload;
    },
    updateColorScheme: (
      state,
      action: PayloadAction<UserPreferences["colorScheme"]>,
    ) => {
      state.colorScheme = action.payload;
    },
    updateNotifications: (
      state,
      action: PayloadAction<{
        key: keyof UserPreferences["notifications"];
        value: boolean;
      }>,
    ) => {
      state.notifications[action.payload.key] = action.payload.value;
    },
  },
});

export const {
  updateLanguage,
  updateFontSize,
  updateColorScheme,
  updateNotifications,
} = settingSlice.actions;
export default settingSlice.reducer;
