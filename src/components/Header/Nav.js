import { useState } from 'react';
import "./nav.css";
import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';
import Menu from './Menu';

const Nav = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="blogr" />
            {open ? 
            <button aria-label="menu-close"><img className="menu-close" src={close} alt="close" onClick={handleClose} /></button> :
            <button aria-label="menu-open"><img className="menu-open" src={hamburger} alt="open" onClick={handleOpen} /></button>
            }
            <Menu open={open} />
        </nav>
    );
}

export default Nav;
