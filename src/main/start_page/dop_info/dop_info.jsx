import s from './dop_info.module.css'

function DopInfo() {
    return (
        <div className={s.display}>
            <div className={s.wrapper}>
                <div className={s.archive}>
                    <div className={s.block}>
                        <h2>Видео</h2>
                        <div className={s.slider}>
                            slider
                        </div>
                        <div className={s.text}>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.</h3>
                            <div>Date</div>
                            <div>Смотреть видео</div>
                        </div>
                    </div>
                    <div className={s.block}>
                        <h2>Фотоматериалы</h2>
                        <div className={s.slider}>
                            slider
                        </div>
                        <div className={s.text}>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.</h3>
                            <div>Date</div>
                            <div>Смотреть фото</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default DopInfo;