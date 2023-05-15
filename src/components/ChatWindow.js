import "./chatWindow.css";
import { useRef, useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";

import MessageItem from "./MessageItem";

import {BsFillPersonPlusFill } from 'react-icons/bs';
import {FiSearch } from 'react-icons/fi';
import {FiMoreVertical } from 'react-icons/fi';
import {FiPaperclip } from 'react-icons/fi';
import {BsEmojiSmile } from 'react-icons/bs';
import {AiOutlineSend} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import {BsFillMicFill} from 'react-icons/bs';

export default function ChatWindow({user}){
    const body = useRef();
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [list, setList] = useState([{author: 123, body: 'bla bla..'},
                                 {author: 1234, body: 'bla bla.....'},
                                 {author: 123, body: 'bla bla.....'},
                                 {author: 1234, body: 'bla bla.....'},
                                 {author: 123, body: 'bla bla.....'},
                                 {author: 1234, body: 'bla bla.....'},
                                 {author: 123, body: 'bla bla.....'},
                                 {author: 1234, body: 'bla bla.....'},
                                 {author: 123, body: 'bla bla.....'},
                                 {author: 1234, body: 'bla bla.....'},
                                 {author: 123, body: 'bla bla.....'},
                                 {author: 1234, body: 'bla bla.....'},
                                 {author: 123, body: 'bla bla.....'},
                                 {author: 1234, body: 'bla bla.....'},
                                 {author: 123, body: 'bla bla.....'},
                                 {author: 1234, body: 'bla bla.....'},
                                 {author: 123, body: 'bla bla.....'}
                                ]);

    
useEffect(()=>{
    if(body.current.scrollHeight > body.current.offsetHeight){
        body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
},[list])

    const handleEmojiClick = ()=>{
        setEmojiOpen(true);
    }

    const handleEmojiClickClose = ()=>{
        setEmojiOpen(false);
    }

    const handleEmojiClickText = ({emoji})=>{
        setText(text + emoji);
    }

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


            <div ref={body}  className="chat-body" >
                {list.map((item, key)=>(
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>


            <div className="chat-emojiarea">
               {emojiOpen ? 
                <EmojiPicker 
                     searchDisabled
                     width={'100%'}
                     height={'300px'}
                     onEmojiClick={handleEmojiClickText}
                 />
                 : <div></div>
               }
            </div>

            <div className="chat-footer" >
                <div className="footer-pre" >
                    <BsEmojiSmile
                        size={25}
                        color="#919191"
                        onClick={handleEmojiClick}
                        style={!emojiOpen ? { color: "#919191" } : { color: "#00BFFF" }}

                    />

                    <AiOutlineClose size={25} color="#919191"
                        style={emojiOpen ? { width: '25px' } : { width: '0px' }}
                        onClick={handleEmojiClickClose}
                    />
                </div>

                <div className="footer-area" >
                    <input 
                        type="text" 
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    />
                </div>

                <div className="footer-pos" >
                    {text ? 
                     <AiOutlineSend size={25} color="#919191"/>
                     :
                     <BsFillMicFill size={25} color="#919191"/>
                    }
                </div>
            </div>
        </div>
        
    );
}