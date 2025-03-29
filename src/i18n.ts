// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector'; // Optional: To detect browser language

i18n
  // Load translations using http backend -> loads files from /public/locales
  .use(HttpApi)
  // Optional: Detect user language
  // Learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  // Learn more: https://www.i18next.com/overview/configuration-options
  .init({
    // Debug output in console
    debug: true, // Set to false in production!
    // Default language
    fallbackLng: 'en',
    // Languages available
    supportedLngs: ['en', 'ka'],
    // Namespace (usually 'translation' is fine for simple apps)
    ns: ['translation'],
    defaultNS: 'translation',
    // Backend options for HttpApi
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
    // React specific options
    react: {
      useSuspense: true, // Recommended for async loading
    },
    // Interpolation options
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;