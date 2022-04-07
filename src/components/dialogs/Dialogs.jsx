import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} itemLogo={d.itemLogo}/> );

    
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.messageInner}>
                    <textarea ref={newMessageElement} className={s.messageInput} placeholder='Напишите сообщение'></textarea>
                    <button onClick={ addMessage } className={s.messageSend}>Отправить</button>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs