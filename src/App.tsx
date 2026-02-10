import LanguageSetting from "./components/LanguageSetting";
import FontSizeSetting from "./components/FontSizeSetting";
import AlarmSetting from "./components/AlarmSetting";
import ThemeSetting from "./components/ThemeSetting";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            사용자 설정
          </h1>

          <div className="space-y-6">
            {/* 언어 설정 */}
            <LanguageSetting />

            {/* 글자 크기 */}
            <FontSizeSetting />

            {/* 알림 설정 */}
            <AlarmSetting />

            {/* 테마 설정 */}
            <ThemeSetting />
          </div>
        </div>
      </div>
    </>
  );
}
