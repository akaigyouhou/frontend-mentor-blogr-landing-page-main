import "./footer.css";
import logo from '../../images/logo.svg';
import ButtonColumn from './ButtonColumn';

const Footer = () => {
    const buttonColumns = [
        {
            top: "Product",
            list: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"]
        },
        {
            top: "Company",
            list: ["About", "Team", "Blog", "Careers"]
        },
        {
            top: "Connect",
            list: ["Contact", "Newsletter", "LinkedIn"]
        }
    ]

    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="blogr" />
            <div className="footer__button-container">
                {buttonColumns.map((buttonColumn, index) => (
                    <ButtonColumn top={buttonColumn.top} list={buttonColumn.list} />
                ))}
            </div>
        </footer>
    );
}

export default Footer;


