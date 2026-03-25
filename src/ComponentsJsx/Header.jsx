import React from 'react';
import '../ComponentsCss/Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className='header'>
        <img
          src={`${process.env.PUBLIC_URL}/Img/logo.png`}
            alt="Logo" 
            className='logo'
        />

        <img
          src={`${process.env.PUBLIC_URL}/Img/hamburger.png`}
            alt="Hamburger" 
            className='hamburger'
            onClick={() => navigate("/Menu")}
        />

    </header>
  );
}

export default Header;