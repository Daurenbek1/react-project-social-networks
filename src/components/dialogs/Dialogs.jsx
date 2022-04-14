import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewsMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} itemLogo={d.itemLogo}/> );

    
    let messagesElements = state.messages.map( m => <Message message={m.message}/>)

    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }   

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewsMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.messageInner}>
                    <textarea value={newMessageBody} 
                    onChange={onNewMessageChange}
                    ref={newMessageElement} 
                    className={s.messageInput} 
                    placeholder='Напишите сообщение'></textarea>
                    <button onClick={ onSendMessageClick } className={s.messageSend}>Отправить</button>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs