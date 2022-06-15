import "./header.css";
import Nav from './Nav';

const Header = () => {
    return (
        <header className="header">
            <Nav />
            <section className="header__section">
                <h1 className="header__title">A modern publishing platform</h1>
                <p className="header__paragraph">Grow your audience and build your online brand</p>
                <div className="header__button-container">
                    <button className="header__button">Start for Free</button>
                    <button className="header__button">Learn More</button>
                </div>
            </section>
        </header>
    );
}

export default Header;
