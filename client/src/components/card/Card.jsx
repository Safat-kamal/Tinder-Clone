import React, { useEffect, useState } from 'react';
import './card.css';
import TinderCard from 'react-tinder-card';
import axios from '../../axios';


const Card = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    const profiles = async ()=>{
      let result = await axios.get("/profiles");
      setCharacters(result.data);
    }
    profiles();
  },[]);

  
  const Swiped = (direction, name) => {
    console.log('You swiped: ' + direction)
  }
  
  const outOfFrame = (name) => {
    console.log("OUt of frame : " + name);
  }


  return (
    <div className='cards__container'>
      <div className="cards">
        {characters.map((character) => {
          return (<TinderCard className='swipe' onSwipe={(dir) => Swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)} preventSwipe={['up', 'down']} key={character.name}>
            <div className="character__card" style={{ backgroundImage: `url(${character.profile_url})` }}>
              <h2>{character.name}</h2>
            </div>
          </TinderCard>)
        })}
      </div>
    </div>
  );
}

export default Card