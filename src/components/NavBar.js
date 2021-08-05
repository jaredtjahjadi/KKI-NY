import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
    const { t } = useTranslation();
    const [click, setClick, navBar, setNavBar] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => { (window.innerWidth <= 960) ? setButton(false) : setButton(true); }
    window.addEventListener('resize', showButton);

    return (
        <nav className="NavBar">
            <NavLink to='/' className="Link" onClick={closeMenu}>{t('pages.home')}</NavLink>
            <NavLink to='/about' className="Link" onClick={closeMenu}>{t('pages.about')}</NavLink>
            <NavLink to='/activities' className="Link" onClick={closeMenu}>{t('pages.activities')}</NavLink>
            <NavLink to="/newsletter" className="Link" onClick={closeMenu}>{t('pages.newsletter')}</NavLink>
            <NavLink to='/contact' className="Link" onClick={closeMenu}>{t('pages.contact')}</NavLink>
        </nav>
    );
}