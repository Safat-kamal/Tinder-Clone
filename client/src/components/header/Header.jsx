import React from 'react';
import './header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom";

const Header = ({backButton}) => {
  return (
    <div className="header__container">
        {backButton ? <Link to={backButton}><IconButton><ArrowBackIosIcon fontSize='large' /></IconButton></Link>:<IconButton><PersonIcon fontSize='large' /></IconButton>}
      <Link to="/"><img src="https://cdn3.iconfinder.com/data/icons/social-network-flat-3/100/Tinder-256.png" alt="" /></Link>
      <Link to="/chats"><IconButton><ForumIcon fontSize='large' /></IconButton></Link>
    </div>
  );
}

export default Header;
