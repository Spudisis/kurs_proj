import s from './navigation.module.css'
import { NavLink } from "react-router-dom"
function Navigation() {
    return (
        <div className={s.list}>
            <NavLink to="/statemant">Подать заявление</NavLink>
            <NavLink to="/guide">Управление</NavLink>
            <NavLink to="/press-center">Пресс-центр</NavLink>
            <NavLink to="/activity">Деятельность</NavLink>
        </div >
    )

}

export default Navigation;