import "./middlearticle.css";

const MiddleArticle = ({title, paragraph}) => {
    return (
        <div className="middle-article">
            <h2 className="middle-article__title">{title}</h2>
            <p className="middle-article__paragraph">{paragraph}</p>
        </div>
    );
};

export default MiddleArticle;
