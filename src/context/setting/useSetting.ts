import { useContext } from "react";
import { SettingContext, SettingContextAction } from "./SettingContext";

// Context에 직접 접근하는 대신 안전 장치가 마련된 전용 Hook을 제공

// 현재 설정값(데이터)을 가져올 때 사용
export function useSetting() {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error("useSetting은 SettingProvider 내부에서만 사용할 수 있습니다.");
  }
  return context;
}

// 설정을 변경하는 함수를 가져올 때 사용
export function useSettingAction() {
  const context = useContext(SettingContextAction);
  if (!context) {
    throw new Error("useSettingAction은 SettingProvider 내부에서만 사용할 수 있습니다.");
  }
  return context;
}