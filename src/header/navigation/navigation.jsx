import s from './navigation.module.css'
import { NavLink } from "react-router-dom"
function Navigation() {
    return (
        <div className={s.list}>
            <NavLink to="/statemant" className={({ isActive }) => (!isActive ? s.active : s.inactive)}>Подать заявление</NavLink>
            <NavLink to="/guide" className={({ isActive }) => (!isActive ? s.active : s.inactive)}>Управление</NavLink>
            <NavLink to="/press-center" className={({ isActive }) => (!isActive ? s.active : s.inactive)}>Пресс-центр</NavLink>
            <NavLink to="/activity" className={({ isActive }) => (!isActive ? s.active : s.inactive)}>Деятельность</NavLink>
        </div >
    )

}

export default Navigation;