import "./main.css";
import MainTop from './top/MainTop';
import MainMiddle from './middle/MainMiddle';
import MainBottom from './bottom/MainBottom';

const Main = () => {
    return (
        <main className="main">
            <MainTop />
            <MainMiddle />
            <MainBottom />
        </main>
    );
}

export default Main;
