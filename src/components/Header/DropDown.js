import "./dropdown.css";

const DropDown = ({contents}) => {
    return (
        <div className="drop-down">
            {contents.map((content, index) => (
                <button key={content} className="drop-down__item">{content}</button>
            ))}
        </div>
    );
}

export default DropDown;