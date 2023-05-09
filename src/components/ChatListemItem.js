import './chatlistItem.css';
import {BsFillPersonPlusFill } from 'react-icons/bs';

export default function ChatListem({onClick, active}){
    return(
        <div className={`chatListemItem ${active? 'active': ''}`} onClick={onClick} >

            <div className='chatListemItem-avatar'>
                <BsFillPersonPlusFill size={25} color='#919191'/>
            </div>
            <div className='chat-lines'>
                <div className='chat-line' >
                    <div className='chat-name' >Eric</div>
                    <div className='chat-date' >19:00</div>
                </div>

                <div className='chat-line' >
                    <div className='chat-lastMsg' >
                        <p>Opa, beleza iai como está ? conta as novas</p>
                    </div>
                </div>
            </div>

        </div>
    );
}