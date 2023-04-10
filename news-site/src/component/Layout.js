import { Link, Outlet } from "react-router-dom";
import logo from './logo.svg';

const Layout = () => {
    return(
        <>
        <header className='header'>
        <div className="container">
                <nav className="navigation grid">
                    <Link href="/" className="navigation_logo">
                        <img
                            src={logo} 
                            width='150px'
                            height='50px'
                            alt="Logo" 
                            className="navigation_img" />
                    </Link>
                    <ul className="navigation_list">
                        <li className="navigation_item">
                            <Link to = "/" className="navigation_link">Главная</Link></li>
                        <li className = "navigation_item">
                            <Link to = "/technologies" className="navigation_link">Технологии</Link></li>
                        <li className = "navigation_item">
                            <Link to = "/science" className="navigation_link">Наука</Link></li>
                        <li className = "navigation_item">
                            <Link to = "/sport" className="navigation_link">Спорт</Link></li>
                        <li className = "navigation_item">
                            <Link to = "/fashion" className="navigation_link">Мода</Link></li>
                    </ul>
            </nav>
            </div>
        </header>
        <Outlet />
        </>
    )
}
export {Layout}