import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';


const activeLink = ({isActive}) => isActive? s.active:s.item;

const Navbar = () => {
    return (
        <nav className={s.nav}>
          <div className={s.item}>
            <NavLink to="/profile" className={activeLink}>Моя страница</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/dialogs" className={activeLink}>Мессенджер</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/" className={activeLink}>Новости</NavLink>
          </div>
        </nav>
    )
}

export default Navbar