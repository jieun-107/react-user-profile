import { Bell } from "lucide-react";

export default function AlarmSetting() {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="text-blue-500" size={24} />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            알림 설정
          </h2>
        </div>
        <div className="space-y-4">
          <label className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300 capitalize">
              이메일 알림
            </span>
            {/* On: bg-blue-500 */}
            {/* Off: bg-gray-300 dark:bg-gray-600 */}
            <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-300 dark:bg-gray-600">
              {/* On: translate-x-6  */}
              {/* Off: translate-x-1 */}
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
            </button>
          </label>
          <label className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300 capitalize">
              푸시 알림
            </span>
            {/* On: bg-blue-500 */}
            {/* Off: bg-gray-300 dark:bg-gray-600 */}
            <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-300 dark:bg-gray-600">
              {/* On: translate-x-6  */}
              {/* Off: translate-x-1 */}
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
            </button>
          </label>
          <label className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300 capitalize">
              데스크톱 알림
            </span>
            {/* On: bg-blue-500 */}
            {/* Off: bg-gray-300 dark:bg-gray-600 */}
            <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-300 dark:bg-gray-600">
              {/* On: translate-x-6  */}
              {/* Off: translate-x-1 */}
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
            </button>
          </label>
        </div>
      </div>
    </>
  );
}
