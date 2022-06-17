import DopInfo from './dop_info/dop_info';
import News from './news/news';
import Questions from './questions/questions';
import s from './start_page.module.css'
import Urls from './urls_another_site/urls';

function StartPage() {
    return (
        <div>
            <News />
            <DopInfo />
            <Urls />
            <Questions />

        </div>

    )

}

export default StartPage;