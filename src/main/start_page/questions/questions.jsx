import s from './questions.module.css'

function Questions() {
    return (
        <div className={s.display}>
            <div className={s.wrapper}>
                <hr />
                <h2>Ввопросы и ответы</h2>
                <div className={s.right}>
                    <a href="#">Все вопросы и ответы -&gt;</a>
                </div>

                <hr />
            </div>
        </div>

    )

}

export default Questions;