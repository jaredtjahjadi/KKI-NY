import { Facebook, GitHub } from 'react-feather';
import '../App.scss';

function Footer() {
    return (
        <footer>
            <div class="row">
                <div class="column">
                    Resurrection-Ascension Church<br />
                    85-26 61st Road, Rego Park, NY 11374
                </div>
                <div class="column">
                    <a className="Facebook" href="https://www.facebook.com/kkinewyork" title="KKI-NY Facebook page"><Facebook /></a>
                    <a className="GitHub" href="https://www.github.com/jaredtjahjadi/KKI-NY" title="GitHub source code"><GitHub /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;