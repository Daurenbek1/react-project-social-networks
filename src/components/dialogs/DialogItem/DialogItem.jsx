import s from './../dialogs.module.css';
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={s.dialogItem}>
                 <img className={s.itemLogo} src={props.itemLogo} alt="logo" />
                 <span className={s.name}>
                    {props.name}
                 </span>
            </NavLink>
        </div>
    )
}


export default DialogItem