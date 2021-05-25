import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to = '/contact'>Contact Us</Link></li>
            </ul>
        </header>
    );
}

export default NavBar;