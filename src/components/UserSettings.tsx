import LanguageSetting from "./LanguageSetting";
import FontSizeSetting from "./FontSizeSetting";
import AlarmSetting from "./AlarmSetting";
import ThemeSetting from "./ThemeSetting";
import useTranslation from "../libs/useTranslation";

export default function UserSettings() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t.profileTitle}
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
