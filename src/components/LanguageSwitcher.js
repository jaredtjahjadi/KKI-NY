import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const checkLanguage = i18n.language === 'en';
    const changeText = checkLanguage ? "Indonesian / Bahasa Indonesia" : "Bahasa Inggris / English"
    return (
        <input
            type="image"
            src={ checkLanguage ? 'img/flag-ID.png' : 'img/flag-US.png' }
            alt={ changeText }
            title={ changeText }
            className="LanguageSwitcher"
            onClick={() => i18n.changeLanguage(checkLanguage ? 'id' : 'en')}
        />
    )
}