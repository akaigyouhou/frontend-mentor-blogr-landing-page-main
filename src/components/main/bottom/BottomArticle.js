import "./bottomarticle.css";

const BottomArticle = ({title, paragraph}) => {
    return (
        <div className="bottom-article">
            <h2 className="bottom-article__title heading_blue">{title}</h2>
            <p className="bottom-article__paragraph paragraph_blue">{paragraph}</p>
        </div>
    );
};

export default BottomArticle;
