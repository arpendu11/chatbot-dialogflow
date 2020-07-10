import React, { useState } from 'react';
import { Link } from "react-router-dom";

import '../styles/Join.css';

export default function Chat() {
    const [name, setName] = useState('');
  
    return (
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Chat with Chatty</h1>
          <div>
            <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
          </div>
          <Link onClick={e => (!name) ? e.preventDefault() : null} to={`/chat?name=${name}`}>
            <button className={'button mt-20'} type="submit">Chat</button>
          </Link>
        </div>
      </div>
    );
  }