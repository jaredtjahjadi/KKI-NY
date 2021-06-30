import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
    const { t } = useTranslation();
    return (
        <div className="NavBar">
            <NavLink exact activeClassName="active" to='/' className="Link">{t('pages.home')}</NavLink>
            <NavLink activeClassName="active" to='/about' className="Link">{t('pages.about')}</NavLink>
            <NavLink activeClassName="active" to='/activities' className="Link">{t('pages.activities')}</NavLink>
            <NavLink activeClassName="active" to="/newsletter" className="Link">{t('pages.newsletter')}</NavLink>
            <NavLink activeClassName="active" to='/contact' className="Link">{t('pages.contact')}</NavLink>
        </div>
    );
}