import { useState, useEffect } from 'react';
import './App.css';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import {BsChatLeftDots } from 'react-icons/bs';
import {RiDonutChartLine } from 'react-icons/ri';
import {FiMoreVertical } from 'react-icons/fi';
import {BsFillPersonPlusFill } from 'react-icons/bs';
import {FiSearch } from 'react-icons/fi';
import ChatListem from './components/ChatListemItem';

function App() {
  const [chatlist, setChatlist] = useState([
    {chatId:1, title:'olá tudo bem ?', avatar:<BsFillPersonPlusFill size={25} color='#919191'/> },
    {chatId:2, title:'olá tudo bem brother ?', avatar:<BsFillPersonPlusFill size={25} color='#919191'/> }
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className='app-window' >

      <div className='sidebar' >
          <header>
            <div className='header-avatar' >
                <BsFillPersonPlusFill size={25} color='#919191'/>
            </div>
            <div className='header-buttons' >
                <div className='header-btn' >
                  <BsChatLeftDots size={25} color='#919191'  />
                </div>
                <div className='header-btn' >
                  <RiDonutChartLine size={25} color='#919191'  />
                </div>
                <div className='header-btn' >
                  <FiMoreVertical size={25} color='#919191'  />
                </div>
            </div>
          </header>
        <div className='search' >
          <div className='search-input' >
            <FiSearch size={25} color='#919191'/>
            <input type='search' placeholder='procurar' />
          </div>
           
        </div>
        <div className='chatlist' >
          {chatlist.map((item, key)=>(
            <ChatListem 
               key={key} 
               active={activeChat.chatId === chatlist[key].chatId}
               onClick = {()=>setActiveChat(chatlist[key])}
            />
        
          ))}
        </div>
      </div>

      <div className='contentarea' >

        {activeChat.chatId !== undefined &&
          <ChatWindow/>
        }

        {activeChat.chatId === undefined &&
          <ChatIntro/>
        }

      </div>
    </div>
  );
}

export default App;
