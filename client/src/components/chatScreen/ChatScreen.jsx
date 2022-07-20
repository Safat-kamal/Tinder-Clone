import React,{useEffect, useState, useRef} from 'react';
import './chatscreen.css';
import Avatar from '@mui/material/Avatar';
import TelegramIcon from '@mui/icons-material/Telegram';
import { IconButton } from '@mui/material';


const ChatScreen = () => {
    const [input,setInput] = useState("");
    const [messages,setMessages] = useState([
        {
            name:"sidharth",
            url:"https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
            msg:"Hi"
        },
        {
            name:"sidharth",
            url:"https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
            msg:"How are You?"
        },
        {
            name:"sidharth",
            url:"https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
            msg:"Your Profile look awesome"
        },
        {
            msg:"Yes i am fine"
        },
        {
            msg:"Thankyou!"
        },

    ]);
    const sendMessageRef = useRef(null);

    useEffect(()=>{
        sendMessageRef.current?.scrollIntoView();
    },[messages])
    
    // send message
    const send_message = (e)=>{
        e.preventDefault();
        if(input !== ""){
            setMessages([...messages,{msg:input}]);
            setInput("");
        }
    }

  return (
    <div className='chatscreen'>
        <h2>You Matched with Sidharth on 09/06/2022</h2>
        <div className="chat__body">
            {
                messages.map((message,index)=>{
                    return (
                        message.name?<div key={index} className="chatscreen__message">
                        <Avatar alt={message.name} src={message.url} />
                        <p className='matched__userMessge'>{message.msg}</p>
                        </div>:<div key={index} className="chatscreen__message">
                            <p className='user__message'>{message.msg}</p>
                        </div>
                    )
                })
            }
            <div ref={sendMessageRef}></div>
        </div>
        <form id="chatInput__form">
            <input type="text" name="chat__inputs" id="chat__inputs" placeholder='Write your message....' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={send_message}><IconButton><TelegramIcon id="send_button" fontSize='large' /></IconButton></button>
        </form>
      
    </div>
  )
}

export default ChatScreen
