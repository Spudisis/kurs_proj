import LogoName from '../../header/name_site/logo_name';
import s from './bot_footer.module.css'

function BotFooter() {
    return (
        <div className={s.bot}>
            <LogoName />
            <div className={s.sites}>
                <p>
                    Мы в соцсетях:
                </p>
                <a href="https://vk.com/nedeadinsideblyat" className={s.Icon} ><img src="./img/vk.png" alt="vk" className={s.vkIcon} /></a>
            </div>
        </div>
    )

}

export default BotFooter;