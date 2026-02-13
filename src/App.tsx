import UserSettings from "./components/UserSettings";
import UserSettingsAsync from "./components/UserSettingsAsync";

export default function App() {
  return (
    <>
      <UserSettingsAsync />
      <UserSettings />
    </>
  );
}
