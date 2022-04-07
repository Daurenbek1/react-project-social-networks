import s from './header.module.css';

const Header = () =>{
    return (
        <header className={s.header}>
            <img className={s.logo}src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/768px-VK_Compact_Logo.svg.png'/>
        </header>
    )
}

export default Header