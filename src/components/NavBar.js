import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NavBar() {
    const { t } = useTranslation();
    return (
        <div className="NavBar">
            <NavLink exact activeClassName="active" to='/' className="Link">{t('navbar.home')}</NavLink>
            <NavLink activeClassName="active" to='/about' className="Link">{t('navbar.about')}</NavLink>
            <NavLink activeClassName="active" to='/activities' className="Link">{t('navbar.activities')}</NavLink>
            <NavLink activeClassName="active" to='/contact' className="Link">{t('navbar.contact')}</NavLink>
        </div>
    );
}

export default NavBar;