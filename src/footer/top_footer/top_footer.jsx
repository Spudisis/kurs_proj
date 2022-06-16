import s from './top_footer.module.css'

function TopFooter() {
    return (
        <div className={s.top}>
            <p>
                Телефон приёмной: 8 (831) 437-38-67 или 8 (831) 433-42-77
            </p>
            <p>
                Обратная связь: official@zags.kreml.nnov.ru
            </p>
            <p>
                Политика конфиденциальности
            </p>
        </div>

    )

}

export default TopFooter;