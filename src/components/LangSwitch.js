import { useTranslation } from 'react-i18next';
import flagID from '../assets/flag-ID.png';
import flagUS from '../assets/flag-US.png';
function LangSwitch() {
    const { i18n } = useTranslation();
    const checkLanguage = i18n.language === 'en';
    return (
        <input
            type="image"
            src={checkLanguage ? flagID : flagUS }
            alt={checkLanguage ? "Indonesian / Bahasa Indonesia" : "Bahasa Inggris / English" }
            title={checkLanguage ? "Indonesian / Bahasa Indonesia" : "Bahasa Inggris / English" }
            className="LanguageSwitcher"
            onClick={() => i18n.changeLanguage(checkLanguage ? 'id' : 'en')}
        />
    )
}

export default LangSwitch;