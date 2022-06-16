import s from './logo_name.module.css'
import { NavLink } from "react-router-dom"

function LogoName() {
    return (
        <div className={s.place}>
            <div>
                <NavLink to="/"><img src="./img/emblem.png" alt="NN" className={s.logo} /></NavLink>
            </div>
            <div className={s.name}>
                <h1>ЗАГС Нижегородской&nbsp;области</h1>
            </div>
        </div>
    )
}

export default LogoName;