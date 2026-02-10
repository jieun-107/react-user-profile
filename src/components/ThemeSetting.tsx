import { Monitor, Moon, Sun } from "lucide-react";
import { useSetting, useSettingAction } from "../context/setting/useSetting";
import { twMerge } from "tailwind-merge";

export default function ThemeSetting() {
  const { preferences } = useSetting();
  const { updateColorScheme } = useSettingAction();
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Sun className="text-blue-500" size={24} />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            테마 설정
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {(["system", "light", "dark"] as const).map((scheme) => (
            <button
              key={scheme}
              className={twMerge(
                "flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ",
                preferences.colorScheme === scheme
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600",
              )}
              onClick={() => updateColorScheme(scheme)}
            >
              {scheme === "system" ? (
                <>
                  <Monitor size={16} />
                  <span>시스템</span>
                </>
              ) : scheme === "light" ? (
                <>
                  <Sun size={16} />
                  <span>라이트</span>
                </>
              ) : (
                <>
                  <Moon size={16} />
                  <span>다크</span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
