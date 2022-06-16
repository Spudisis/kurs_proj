
import BotFooter from './bot_footer/bot_footer';
import s from './footer.module.css'
import TopFooter from './top_footer/top_footer';

function Footer() {
    return (
        <footer className={s.block}>
            <div className={s.wid}>
                <TopFooter />
                <hr />
                <BotFooter />
            </div>
        </footer>
    )

}

export default Footer;