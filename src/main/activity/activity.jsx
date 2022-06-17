import s from './activity.module.css'
import { NavLink } from "react-router-dom"

function Activity() {
    return (
        <div className={s.wrapper}>

            <li><NavLink to='1'>Показатели, характеризующие деятельность главного управления ЗАГС Нижегородской области</NavLink></li>
            <li><NavLink to='2'>Оказание государственных услуг и (или) функций</NavLink></li>
            <li><NavLink to='3'>Государственная служба</NavLink></li>
            <li><NavLink to='4'>Государственные закупки</NavLink></li>
            <li><NavLink to='5'>Противодействие коррупции</NavLink></li>
            <li><NavLink to='6'>Антимонопольный комплаенс</NavLink></li>
            <li><NavLink to='7'>Открытое управление</NavLink></li>
            <li><NavLink to='8'>Противодействие экстремизму и терроризму</NavLink></li>
            <li><NavLink to='9'>Осуществление деятельности в рамках защиты от чрезвычайных ситуаций</NavLink></li>
            <li><NavLink to='10'>Сведения об использовании главным управлением выделяемых финансовых средств</NavLink></li>

        </div>

    )

}

export default Activity;