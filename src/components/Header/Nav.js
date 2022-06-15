import "./nav.css";
import logo from '../../images/logo.svg';
import open from '../../images/icon-hamburger.svg';

const Nav = () => {
    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="blogr" />
            <img className="menu-open" src={open} alt="open" />
        </nav>
    );
}

export default Nav;
