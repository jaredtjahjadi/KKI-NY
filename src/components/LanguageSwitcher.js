import { useTranslation } from 'react-i18next';
import flagID from '../images/flagID.png';
import flagUS from '../images/flagUS.png';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const checkLanguage = i18n.language === 'en';
    const changeText = checkLanguage ? "Indonesian / Bahasa Indonesia" : "Bahasa Inggris / English"
    return (
        <input
            type="image"
            src={ checkLanguage ? flagID : flagUS }
            alt={ changeText }
            title={ changeText }
            className="LanguageSwitcher"
            onClick={() => i18n.changeLanguage(checkLanguage ? 'id' : 'en')}
        />
    );
}