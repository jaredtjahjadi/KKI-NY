import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n.use(LanguageDetector).use(Backend).use(initReactI18next).init({
    debug: true, //Logs info to console
    fallbackLng: 'en', //Sets lang to English if browser-detected language not available
    load: 'languageOnly',
    interpolation: {
        escapeValue: false,
    }
})