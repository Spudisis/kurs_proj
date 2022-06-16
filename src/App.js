import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import s from './normalize.module.css';

function App() {
  return (
    <div className={s.body}>
      <Header />
      <Main />
      <Footer />
    </div>

  )

}

export default App;
