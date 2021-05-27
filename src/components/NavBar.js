import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <Link to='/' className="logo"><img src="logo.png" alt="KKI-NY logo" title="KKI-NY logo" /></Link>
            <Link to='/' className="Link">Home</Link>
            <Link to='/about' className="Link">About</Link>
            <Link to = '/contact' className="Link">Contact Us</Link>
        </header>
    );
}

export default NavBar;