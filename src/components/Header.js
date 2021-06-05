import { Link } from 'react-router-dom';
import banner from '../assets/banner.png';
function Header() {
    return (
        <div className="Header">
            <Link to='/'><img src={banner} alt="Banner" /></Link>
        </div>
    )
}

export default Header;