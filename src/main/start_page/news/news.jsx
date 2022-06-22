import { NavLink } from "react-router-dom"
import s from './news.module.css'
function News() {

    return (

        <div className={s.display}>
            <div className={s.wrapper}>
                <h2>Новости</h2>
                <div className={s.news}>
                    <div className={s.slider}>

                    </div>
                    <div className={s.list_news}>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </li><hr />
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li><hr />
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li><hr />
                        <NavLink to='#' className={s.anotherNews}> Все новости -&gt;</NavLink>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default News;