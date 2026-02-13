import { Bell } from "lucide-react";
// import { useSetting, useSettingAction } from "../context/setting/useSetting";
import { twMerge } from "tailwind-merge";
import useTranslation from "../libs/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateNotifications } from "../store/features/setting/settingSlice";

/**
 * AlarmSetting 컴포넌트
 * 사용자의 알림 환경설정(이메일, 푸시, 데스크톱)을 토글 버튼 형태로 제어
 */
export default function AlarmSetting() {
  const notifications = useSelector((state: RootState) => state.setting.notifications);
  const dispatch = useDispatch();
  // 1. Context에서 현재 설정 상태(preferences)와 업데이트 함수(updateNotifications)를 가져옴
  // const { preferences } = useSetting();
  // const { updateNotifications } = useSettingAction();
  const { t } = useTranslation();
  return (
    <>
      {/* 카드 형태의 컨테이너: 라이트/다크 모드 대응 및 그림자 효과 */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="text-blue-500" size={24} />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t.notifications.label}
          </h2>
        </div>
        <div className="space-y-4">
          {/**
           * 2. notifications 객체의 키값들을 순회하며 UI를 생성
           * Object.keys와 타입 단언(as)을 통해 TypeScript 타입 안전성을 확보
           */}
          {(
            Object.keys(
              notifications,
            ) as (keyof UserPreferences["notifications"])[]
          ).map((key) => (
            <label key={key} className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300 capitalize">
                {key === "email"
                  ? t.notifications.email
                  : key === "push"
                    ? t.notifications.push
                    : t.notifications.desktop}
              </span>
              {/* On: bg-blue-500 */}
              {/* Off: bg-gray-300 dark:bg-gray-600 */}
              <button
                className={twMerge(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors ",
                  notifications[key]
                    ? "bg-blue-500"
                    : "bg-gray-300 dark:bg-gray-600",
                )}
                onClick={() =>
                  dispatch(updateNotifications({key, value:!notifications[key]}))
                }
              >
                {/* On: translate-x-6  */}
                {/* Off: translate-x-1 */}
                <span className={twMerge("inline-block h-4 w-4 transform rounded-full bg-white transition-transform ",
                  notifications[key] ? "translate-x-6" : "translate-x-1"
                )} />
              </button>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
