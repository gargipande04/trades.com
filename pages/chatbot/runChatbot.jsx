import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from './bot/config.js';
import messageParser from './bot/MessageParser.jsx';
import actionProvider from './bot/ActionProvider.jsx';

function MyComponent() {
  const [showBot, toggleBot] = useState(false);
  const [botKey, setBotKey] = useState(0);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  // const clearMessages = () => {
  //   // localStorage.clear();
  //   localStorage.removeItem('chat_messages');
  //   setBotKey(prevKey => prevKey + 1); // increment the key to force remount
  // };

  return (
    <div className='App'>
      {showBot && (
        <Chatbot
          key={botKey}
          config={config}
          actionProvider={actionProvider}
          messageHistory={loadMessages()}
          messageParser={messageParser}
          saveMessages={saveMessages}
        />
      )}
      <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
      {/* <button onClick={clearMessages}>Clear Messages</button> */}
    </div>
  );
}

export default MyComponent;

//TODO
//going to implement the clear function later
//want it so the user at any point can type "clear" 
//and the contents of the chatbot will clear, 
//as well as the contents of the local storage

//may need to implement webkit functionality for the css, as there were slight issues