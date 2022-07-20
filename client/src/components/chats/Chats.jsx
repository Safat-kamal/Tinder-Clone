import React from 'react';
import './chats.css';
import Chat from '../chat/Chat';

const Chats = () => {
  return (
    <div className='chats'>
     <h2 className='chats__title'>All Chats</h2>
      <Chat name="Ivy" url="https://images.unsplash.com/photo-1516029637308-3adce832dbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4lMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" message="Hi,How are you?" timestamp="10 Minutes ago"/>
      <Chat name="Ananya" url="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" message="You are amazing yrr" timestamp="1 Minutes ago"/>
      <Chat name="Sidharth" url="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" message="lets meet tommorrow?" timestamp="10 Seconds ago"/>
      <Chat name="Ivy" url="https://images.unsplash.com/photo-1516029637308-3adce832dbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4lMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" message="Hi,How are you?" timestamp="10 Minutes ago"/>
      <Chat name="Ananya" url="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" message="You are amazing yrr" timestamp="1 Minutes ago"/>
      <Chat name="Sidharth" url="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" message="lets meet tommorrow?" timestamp="10 Seconds ago"/>
    </div>
  );
}

export default Chats
