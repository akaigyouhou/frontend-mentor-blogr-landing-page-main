import "./mainmiddle.css";
import middleArticles from '../../../middleArticles.json';
import MiddleArticle from './MiddleArticle';
import phone from '../../../images/illustration-phones.svg';

const MainMiddle = () => {
    return (
        <div className="main-middle">
            <img className="main-middle__illustration" src={phone} alt="phone" />
            {middleArticles.map((article, index) => (
                <MiddleArticle key={article.title} title={article.title} paragraph={article.paragraph} />
            ))}
        </div>
    );
};

export default MainMiddle;
