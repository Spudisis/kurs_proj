import s from './header.module.css'
import LogoName from './name_site/logo_name';
import Navigation from './navigation/navigation';


function Header() {
    return (
        <header className={s.test}>
            <LogoName />
            <Navigation />
        </header>
    )

}

export default Header;