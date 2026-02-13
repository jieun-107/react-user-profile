import { useSelector } from "react-redux";
// import { useSetting } from "../context/setting/useSetting";
import { SupportedLanguage, translations } from "./i18n";
import { RootState } from "../store/store";

export default function useTranslation() {
  // const { preferences } = useSetting();
  const language = useSelector((state:RootState) => state.setting.language);
  const lang  = language as SupportedLanguage;
  const t = translations[lang];
  return { t, lang }
}
