import { useSetting } from "../context/setting/useSetting";
import { SupportedLanguage, translations } from "./i18n";

export default function useTranslation() {
  const { preferences } = useSetting();
  const lang  = preferences.language as SupportedLanguage;
  const t = translations[lang];
  return { t, lang }
}
