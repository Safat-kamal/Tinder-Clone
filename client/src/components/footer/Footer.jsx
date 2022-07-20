import React from 'react';
import './footer.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import FlashOnIcon from '@mui/icons-material/FlashOn';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_icon"><ReplayIcon className="reload__icon"/></div>
        <div className="footer_icon"><CloseIcon className="cancel__icon"/></div>
        <div className="footer_icon"><StarIcon className="bookmark__icon"/></div>
        <div className="footer_icon"><FavoriteIcon className="favourate__icon"/></div>
        <div className="footer_icon"><FlashOnIcon className="interact__icon"/></div>
    </div>
  )
}

export default Footer
