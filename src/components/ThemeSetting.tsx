import { Monitor, Moon, Sun } from "lucide-react";

export default function ThemeSetting() {
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
          {/* On: bg-blue-500 text-white */}
          {/* Off: bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
            <Monitor size={16} />
            <span>시스템</span>
          </button>
          {/* On: bg-blue-500 text-white */}
          {/* Off: bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
            <Sun size={16} />
            <span>라이트</span>
          </button>
          {/* On: bg-blue-500 text-white */}
          {/* Off: bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
            <Moon size={16} />
            <span>다크</span>
          </button>
        </div>
      </div>
    </>
  );
}
