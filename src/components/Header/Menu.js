import { useState } from 'react';
import "./menu.css";
import arrowDark from '../../images/icon-arrow-dark.svg';
import DropDown from './DropDown';

const Menu = () => {
    const [productOpen, setProductOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [connectOpen, setConnectOpen] = useState(false);

    const productContents = ["Overview", "Pricing", "Marketplace", "Features", "Integrations"];
    const companyContents = ["About", "Team", "Blog", "Careers", "Integrations"];
    const connectContents = ["Contact", "Newsletter", "Linkedln"];


    const handleToggleProduct = () => {
        setProductOpen(e => !e);
    }

    const handleToggleCompany = () => {
        setCompanyOpen(e => !e);
    }

    const handleToggleConnect = () => {
        setConnectOpen(e => !e);
    }

    return (
        <div className="menu">
            <div className="top-menu">
                <div className="button-container">
                    <div className="button-with-arrow">
                        <button className="top-button" onClick={handleToggleProduct}>Product</button>
                        <img className={"arrow" + (productOpen ? " arrow-open" : "")} src={arrowDark} alt="arrow" />
                    </div>
                    {productOpen && (
                        <DropDown contents={productContents} />
                    )}
                </div>
                <div className="button-container">
                    <div className="button-with-arrow">
                        <button className="top-button" onClick={handleToggleCompany}>Company</button>
                        <img className={"arrow" + (companyOpen ? " arrow-open" : "")} src={arrowDark} alt="arrow" />
                    </div>
                    {companyOpen && (
                        <DropDown contents={companyContents} />
                    )}
                </div>
                <div className="button-container">
                    <div className="button-with-arrow">
                        <button className="top-button" onClick={handleToggleConnect}>Connect</button>
                        <img className={"arrow" + (connectOpen ? " arrow-open" : "")} src={arrowDark} alt="arrow" />
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
