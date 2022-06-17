import s from './urls.module.css'

function Urls() {
    return (
        <div className={s.display}>
            <div className={s.wrapper}>
                <h2>Полезные ссылки</h2>
                <div className={s.help}>
                    <div className={s.block}>
                        <img src="./img/Emblem_of_Ministry_of_Justice.jpg" alt="EoMoJ" />
                        <div className={s.nameSite}>
                            <h4>Главное управление Минюста России по Нижегородской области</h4>
                            <a target="_blank" href="https://to52.minjust.gov.ru/ru/">to52.minjust.gov.ru</a>

                        </div>
                    </div>
                    <div className={s.block}>
                        <img src="./img/brack.jpg" alt="brack" />
                        <div className={s.nameSite}>
                            <h4>Нижегородский Дом бракосочетания</h4>
                            <a target="_blank" href="https://nn-svadba.ru/">nn-svadba.ru</a>

                        </div>
                    </div>
                    <div className={s.block}>
                        <img src="./img/gosusl.png" alt="gosusl" />
                        <div className={s.nameSite}>
                            <h4>Портал Госуслуг</h4>
                            <a target="_blank" href="https://www.gosuslugi.ru/">www.gosuslugi.ru</a>

                        </div>
                    </div>
                    <div className={s.block}>
                        <img src="./img/emblem.png" alt="NN" />
                        <div className={s.nameSite}>
                            <h4>Правительство Нижегородской области</h4>
                            <a target="_blank" href="https://government-nnov.ru/">government-nnov.ru</a>
                        </div>
                    </div>

                    <div className={s.block}>
                        <img src="./img/sluzhba-finansovogo-upolnomochennogo.jpg" alt="finUpoln" />
                        <div className={s.nameSite}>
                            <h4>Финансовый уполномоченный: быстро, бесплатно, справедливо</h4>
                            <a target="_blank" href="https://new.finombudsman.ru/news/">new.finombudsman.ru</a>

                        </div>
                    </div>
                </div>



            </div>
        </div>

    )

}

export default Urls;