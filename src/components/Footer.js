import { Facebook, GitHub } from 'react-feather';
import '../App.scss';

export default function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="column">
                    <p style={{fontWeight: 'bold', display: 'inline'}}>Resurrection-Ascension Church</p><br />
                    85-26 61st Road<br />
                    Rego Park, NY 11374
                </div>
                <div className="column">
                    <a className="Facebook" href="https://www.facebook.com/kkinewyork" title="Check us on Facebook!"><Facebook /></a>
                    <a className="GitHub" href="https://www.github.com/jaredtjahjadi/KKI-NY" title="GitHub source code"><GitHub /></a>
                </div>
            </div>
        </footer>
    );
}