import { useEffect, useState } from 'react';
import "./menu.css";
import arrowDark from '../../images/icon-arrow-dark.svg';
import arrowLight from '../../images/icon-arrow-light.svg';
import DropDown from './DropDown';

const Menu = ({open}) => {
    const [openNumber, setOpenNumber] = useState(null);

    // const [productOpen, setProductOpen] = useState(false);
    // const [companyOpen, setCompanyOpen] = useState(false);
    // const [connectOpen, setConnectOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    console.log(width);

    let productOpen = (openNumber === 0 ? true : false);
    let companyOpen = (openNumber === 1 ? true : false);
    let connectOpen = (openNumber === 2 ? true : false);

    const productContents = ["Overview", "Pricing", "Marketplace", "Features", "Integrations"];
    const companyContents = ["About", "Team", "Blog", "Careers", "Integrations"];
    const connectContents = ["Contact", "Newsletter", "Linkedln"];

    let arrowUrl;
    if (width >= 900) {
        arrowUrl = arrowLight;
    } else {
        arrowUrl = arrowDark;
    }

    useEffect(() => {
        const checkWidth = () => {
            const currentWidth = window.innerWidth;
            setWidth(currentWidth);
        }
        window.addEventListener("resize", checkWidth);
        return () => {
            window.removeEventListener("resize", checkWidth);
        };
    }, []);

    const handleToggleProduct = () => {
        openNumber === 0 ? setOpenNumber(null) : setOpenNumber(0);
    }

    const handleToggleCompany = () => {
        openNumber === 1 ? setOpenNumber(null) : setOpenNumber(1);
    }

    const handleToggleConnect = () => {
        openNumber === 2 ? setOpenNumber(null) : setOpenNumber(2);
    }

    return (
        <div className={"menu " + (open ? "menu-show" : "")}>
            <div className="top-menu">
                <div className="button-container">
                    <div className="button-with-arrow">
                        <button className={"top-button" + (productOpen ? " top-button-open" : "")} onClick={handleToggleProduct}>Product</button>
                        <img className={"arrow" + (productOpen ? " arrow-open" : "")} src={arrowUrl} alt="arrow" />
                    </div>
                    {productOpen && (
                        <DropDown contents={productContents} />
                    )}
                </div>
                <div className="button-container">
                    <div className="button-with-arrow">
                        <button className={"top-button" + (companyOpen ? " top-button-open" : "")} onClick={handleToggleCompany}>Company</button>
                        <img className={"arrow" + (companyOpen ? " arrow-open" : "")} src={arrowUrl} alt="arrow" />
                    </div>
                    {companyOpen && (
                        <DropDown contents={companyContents} />
                    )}
                </div>
                <div className="button-container">
                    <div className="button-with-arrow">
                        <button className={"top-button" + (connectOpen ? " top-button-open" : "")} onClick={handleToggleConnect}>Connect</button>
                        <img className={"arrow" + (connectOpen ? " arrow-open" : "")} src={arrowUrl} alt="arrow" />
                    </div>
                    {connectOpen && (
                        <DropDown contents={connectContents} />
                    )}
                </div>
            </div>
            <div className="bottom-menu">
                <button className="login-button">Login</button>
                <button className="sign-up-button">Sign Up</button>
            </div>
        </div>
    );
}

export default Menu;
