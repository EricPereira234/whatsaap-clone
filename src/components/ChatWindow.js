import "./chatWindow.css";

import {BsFillPersonPlusFill } from 'react-icons/bs';
import {FiSearch } from 'react-icons/fi';
import {FiMoreVertical } from 'react-icons/fi';
import {FiPaperclip } from 'react-icons/fi';

export default function ChatWindow(){
    return(
        <div className="chatWindow" >
            <div className="chat-header" >

                <div className="header-info" >
                    <BsFillPersonPlusFill size={25} color='#919191'/>
                    <div className="header-name" >Eric</div>
                
                </div>

                <div className="header-btn" >
                    <FiSearch size={25} color="#919191" className="svg" />
                    <FiPaperclip size={25} color="#919191"/>
                    <FiMoreVertical size={25} color="#919191"/>
                </div>

            </div>

            <div className="chat-body" >

            </div>

            <div className="chat-footer" >

            </div>
        </div>
        
    );
}