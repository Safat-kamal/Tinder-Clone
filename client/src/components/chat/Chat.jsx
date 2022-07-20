import React from 'react';
import './chat.css';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";


const Chat = ({ name, url, message, timestamp }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className='chat'>
        <Avatar alt={name} src={url} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <div className='timestamp'>{timestamp}</div>
      </div>
    </Link>
  );
}


export default Chat