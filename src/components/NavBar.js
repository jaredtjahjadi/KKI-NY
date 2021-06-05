import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NavBar() {
    const { t } = useTranslation();
    return (
        <div className="NavBar">
            <Link to='/' className="Link">{t('home')}</Link>
            <Link to='/about' className="Link">{t("about")}</Link>
            <Link to='/activities' className="Link">{t("activities")}</Link>
            <Link to='/contact' className="Link">{t("contact")}</Link>
        </div>
    );
}

export default NavBar;