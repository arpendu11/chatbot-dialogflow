import React from 'react';

import '../styles/Input.css';

const Input = ({ setMessage, sendMessage, message, askChatty }) => {
  const onKeyPress = (event) => {
    sendMessage(event);
    askChatty(event);
  };
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? onKeyPress(event) : null}
      />
      <button className="sendButton" onClick={e => onKeyPress(e)}>Send</button>
    </form>
  );
}

export default Input;