import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import s from './normalize.module.css';

function App() {
  return (
    <div className={s.body}>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>

    </div>

  )

}

export default App;
