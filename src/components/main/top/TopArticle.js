import "./toparticle.css";

const TopArticle = ({title, paragraph, index}) => {
    return (
        <article className="top-article">
            <h2 className={`top-article__title top-article__title-${index} heading_blue`}>{title}</h2>
            <p className="top-article__paragraph paragraph_blue">{paragraph}</p>
        </article>
    );
}

export default TopArticle;
