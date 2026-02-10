import { Type } from "lucide-react";
import { useSetting, useSettingAction } from "../context/setting/useSetting";
import { twMerge } from "tailwind-merge";

export default function FontSizeSetting() {
  const { preferences } = useSetting();
  const { updateFontSize } = useSettingAction();
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Type className="text-blue-500" size={24} />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            글자 크기
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {(["small", "medium", "large"] as const).map((size) => (
            <button
              key={size}
              className={twMerge(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors ",
                preferences.fontSize === size
                  ? " bg-blue-500 text-white"
                  : " bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600",
              )}
              onClick={() => updateFontSize(size)}
            >
              {size === "small" ? "작게" : size === "medium" ? "보통" : "크게"}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
