import "./mainbottom.css";
import bottomArticles from '../../../bottomArticles.json';
import BottomArticle from './BottomArticle';

const MainBottom = () => {
    return (
        <div className="main-bottom">
            {bottomArticles.map((article, index) => (
                <BottomArticle key={article.title} title={article.title} paragraph={article.paragraph} />
            ))}
        </div>
    );
};

export default MainBottom;
