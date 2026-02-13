import { Monitor, Moon, Sun } from "lucide-react";
// import { useSetting, useSettingAction } from "../context/setting/useSetting";
import { twMerge } from "tailwind-merge";
import useTranslation from "../libs/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateColorScheme } from "../store/features/setting/settingSlice";
import { useLayoutEffect } from "react";

export default function ThemeSetting() {
  const colorScheme = useSelector((state: RootState) => state.setting.colorScheme);
  const dispatch = useDispatch();


  // const { preferences } = useSetting();
  // const { updateColorScheme } = useSettingAction();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    if(colorScheme === "system") {
      document.documentElement.classList.remove("light", "dark");
      // 사용자 프로필 설정이 다크모드인가
      if (window.matchMedia("prefers-color-scheme: dark").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.add("light");
      }
    } else {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(colorScheme);
    }
  }, [colorScheme]);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Sun className="text-blue-500" size={24} />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t.theme.label}
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {(["system", "light", "dark"] as const).map((scheme) => (
            <button
              key={scheme}
              className={twMerge(
                "flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ",
                colorScheme === scheme
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600",
              )}
              onClick={() => dispatch(updateColorScheme(scheme))}
            >
              {scheme === "system" ? (
                <>
                  <Monitor size={16} />
                  <span>{t.theme.system}</span>
                </>
              ) : scheme === "light" ? (
                <>
                  <Sun size={16} />
                  <span>{t.theme.light}</span>
                </>
              ) : (
                <>
                  <Moon size={16} />
                  <span>{t.theme.dark}</span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
