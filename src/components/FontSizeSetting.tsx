import { Type } from "lucide-react";
// import { useSetting, useSettingAction } from "../context/setting/useSetting";
import { twMerge } from "tailwind-merge";
import useTranslation from "../libs/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateFontSize } from "../store/features/setting/settingSlice";
import { useLayoutEffect } from "react";

export default function FontSizeSetting() {
  const fontSize = useSelector((state: RootState) => state.setting.fontSize);
  const dispatch = useDispatch();

  // const { preferences } = useSetting();
  // const { updateFontSize } = useSettingAction();
  const { t }= useTranslation();

  useLayoutEffect(() => {
     document.documentElement.style.fontSize = {
        small: "14px",
        medium: "16px",
        large: "18px",
      }[fontSize];
  }, [fontSize]);
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Type className="text-blue-500" size={24} />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t.fontSize.label}
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {(["small", "medium", "large"] as const).map((size) => (
            <button
              key={size}
              className={twMerge(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors ",
                fontSize === size
                  ? " bg-blue-500 text-white"
                  : " bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600",
              )}
              onClick={() => dispatch(updateFontSize(size))}
            >
              {size === "small" ? t.fontSize.small : size === "medium" ? t.fontSize.medium : t.fontSize.large}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
