import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";
import Messages from './Messages';
import Input from './Input';

import '../styles/Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:8000/';

    useEffect(() => {
        const { name } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
        setName(name);
    
        socket.emit('join', { name }, (error) => {
          if(error) {
            alert(error);
          }
        });
      }, [ENDPOINT, location.search]);
    
    useEffect(() => {
      socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
      });
    }, []);

    const sendMessage = (event) => {
      event.preventDefault();
    
      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));        
      }
    };

    const askChatty = (event) => {
      event.preventDefault();
    
      if(message) {
        socket.emit('askChatty', message, () => setMessage(''));        
      }
    };

    return (
        <div className="outerContainer">
            <div className="container">
                <h1>
                    Chatty the chatbot !!
                </h1>
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} askChatty={askChatty}  />
            </div>
        </div>
    );
};

export default Chat;

