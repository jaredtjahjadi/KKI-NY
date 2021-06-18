import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="Header">
            <Link to='/'><img src='img/banner.png' alt="Banner" /></Link>
        </div>
    )
}