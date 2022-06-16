import "./buttoncolumn.css";

const ButtonColumn = ({top, list}) => {
    return (
        <div className="footer__button-column">
            <button className="footer__top-button">{top}</button>
            <div className="footer__button-list">
            {list.map((item, index) => (
                <button key={item} className="footer__button-list-item">{item}</button>
            ))}
            </div>
        </div>
    );
};

export default ButtonColumn;