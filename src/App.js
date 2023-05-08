import { useState, useEffect } from 'react';
import './App.css';
import {BsChatLeftDots } from 'react-icons/bs';
import {RiDonutChartLine } from 'react-icons/ri';
import {FiMoreVertical } from 'react-icons/fi';
import {BsFillPersonPlusFill } from 'react-icons/bs';
import {FiSearch } from 'react-icons/fi';
import ChatListem from './components/ChatListemItem';

function App() {
  const [chatlist, setChatlist] = useState([{},{},{}]);

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
            <ChatListem key={key} />
          ))}
        </div>
      </div>

      <div className='contentarea' >
        ....
      </div>
    </div>
  );
}

export default App;
