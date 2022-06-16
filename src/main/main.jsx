import s from './main.module.css'
import Statemant from './send_statemant/send_statemant';
import StartPage from './start_page/start_page';
import PressCenter from './press_center/press_center';
import Activity from './activity/activity';
import Guide from './guide/guide';

import { Route, Routes } from "react-router-dom"

function Main() {
    return (
        <div className={s.window}>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/statemant" element={<Statemant />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/press-center" element={<PressCenter />} />
                <Route path="/activity" element={<Activity />} />
            </Routes>
        </div>
    )

}

export default Main;