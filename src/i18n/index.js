import { createI18n } from "vue-i18n";
import en from "@/i18n/en";
import es from "@/i18n/es";

const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: 'en',
    messages: {en, es}
});
export default i18n;
