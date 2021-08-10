import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hamburger from 'hamburger-react';

export default function NavBar() {
    const { t } = useTranslation();
    const [click, setClick] = useState(false);
    const closeMenu = () => setClick(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className="NavBar">
            <div className="icon" onClick={handleClick}>
                <Hamburger toggled={click} toggle={setClick} />
            </div>
            <ul className={click ? 'Links active' : 'Links'}>
                <li className="nav-elem">
                    <NavLink to='/' className="Link" onClick={closeMenu}>{t('pages.home')}</NavLink>
                </li>
                <li className="nav-elem">
                    <NavLink to='/about' className="Link" onClick={closeMenu}>{t('pages.about')}</NavLink>
                </li>
                <li className="nav-elem">
                    <NavLink to='/activities' className="Link" onClick={closeMenu}>{t('pages.activities')}</NavLink>
                </li>
                <li className="nav-elem">
                    <NavLink to="/newsletter" className="Link" onClick={closeMenu}>{t('pages.newsletter')}</NavLink>
                </li>
                <li className="nav-elem">
                    <NavLink to='/contact' className="Link" onClick={closeMenu}>{t('pages.contact')}</NavLink>
                </li>
            </ul>
        </nav>
    );
}