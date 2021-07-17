/**
 * Small component that makes the top of the page display differently in each page
 */
import { useLocation } from 'react-router-dom';
import { HomeHeader, NavBar } from '../index';
export default function HeaderDisplay() {
    const location = useLocation();
    return ((location.pathname === '/') ? <HomeHeader /> : <NavBar /> );   
}