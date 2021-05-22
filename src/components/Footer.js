import { Facebook, GitHub } from 'react-feather';
import '../App.scss';

function Footer() {
    return (
        <footer>
            <a className="Facebook" href="https://www.facebook.com/kkinewyork"><Facebook /></a>
            <a className="GitHub" href="https://www.github.com/jaredtjahjadi/KKI-NY"><GitHub /></a>
        </footer>
    );
}

export default Footer;