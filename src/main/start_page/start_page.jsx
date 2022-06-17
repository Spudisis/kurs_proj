import DopInfo from './dop_info/dop_info';
import News from './news/news';
import Questions from './questions/questions';
import s from './start_page.module.css'

function StartPage() {
    return (
        <div>
            <News />
            <DopInfo />
            <Questions />

        </div>

    )

}

export default StartPage;