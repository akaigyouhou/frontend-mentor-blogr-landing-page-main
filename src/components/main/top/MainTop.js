import "./maintop.css";
import TopArticle from './TopArticle';
import topArticles from '../../../topArticles.json';

const MainTop = () => {

    return (
        <div className="main-top">
            <h2 className="main-top__title heading_blue">Designed for the future</h2>
            {topArticles.map((article, index) => (
                <TopArticle key={article.title} title={article.title} paragraph={article.paragraph} index={index} />
            ))}
        </div>
    );
}

export default MainTop;
