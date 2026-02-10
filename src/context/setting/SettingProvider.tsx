import { useEffect, useMemo, useState } from "react";
import { SettingContext, SettingContextAction } from "./SettingContext";

/**
 * 초기 설정값 정의: 사용자 기본 환경설정
 */
const defaultValue: UserPreferences = {
  language: "ko",
  fontSize: "medium",
  notifications: {
    email: false,
    push: false,
    desktop: false,
  },
  colorScheme: "system",
};

/**
 * SettingProvider 컴포넌트
 * 어플리케이션 전역에 설정 데이터와 변경 함수(Action)를 공급
 */
export default function SettingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. 실제 데이터를 관리하는 State
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    const save = localStorage.getItem("preferences");
    return save ? JSON.parse(save) : defaultValue;
  });
  
  // 언어 변경 함수
  const updateLanguage = (language: UserPreferences["language"]) => {
    setPreferences((preferences) => ({ ...preferences, language }));
  };
  
  // 글자 크기 변경 함수
  const updateFontSize = (fontSize: UserPreferences["fontSize"]) => {
    setPreferences((preferences) => ({ ...preferences, fontSize }));
  };
  
  // 알림 설정 변경 함수 (중첩된 객체 업데이트)
  const updateNotifications = (
    key: keyof UserPreferences["notifications"],
    value: boolean,
  ) => {
    setPreferences((preferences) => ({
      ...preferences,
      // 기존 알림 객체를 복사하고 특정 키(email, push 등)만 업데이트
      notifications: { ...preferences.notifications, [key]: value },
    }));
  };

  // 컬러 스키마(다크/라이트 모드) 변경 함수
  const updateColorScheme = (colorScheme: UserPreferences["colorScheme"]) => {
    setPreferences((preferences) => ({ ...preferences, colorScheme }));
  };

  /**
   * 2. 액션 함수들의 메모이제이션
   * useMemo를 사용하여 함수들이 담긴 객체가 리렌더링 시마다 새로 생성되는 것을 방지
   * 의존성 배열이 비어있으므로 컴포넌트가 처음 생성될 때 한 번만 만들어짐
   * 이로 인해 Action Context를 구독하는 컴포넌트의 불필요한 리렌더링을 막음
   */
  const memoization = useMemo(
    () => ({
      updateLanguage,
      updateFontSize,
      updateNotifications,
      updateColorScheme,
    }),
    [],
  );

  useEffect(() => {
    localStorage.setItem("preferences", JSON.stringify(preferences));

    document.documentElement.style.fontSize = {
      small: "14px",
      medium: "16px",
      large: "18px",
    }[preferences.fontSize];
    console.log("preferences change");
    if(preferences.colorScheme === "system") {
      document.documentElement.classList.remove("light", "dark");
      // 사용자 프로필 설정이 다크모드인가
      if (window.matchMedia("prefers-color-scheme: dark").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.add("light");
      }
    } else {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(preferences.colorScheme);

    }
  }, [preferences]);
  return (
    <>
      {/* 3. Context 이중 래핑 (성능 최적화 전략)
        - SettingContextAction: 변경 함수들을 전달 (거의 변하지 않음)
        - SettingContext: 실제 설정 데이터를 전달 (값이 바뀔 때마다 구독 컴포넌트 리렌더링)
      */}
      <SettingContextAction value={memoization}>
        <SettingContext value={{ preferences }}>{children}</SettingContext>
      </SettingContextAction>
    </>
  );
}
