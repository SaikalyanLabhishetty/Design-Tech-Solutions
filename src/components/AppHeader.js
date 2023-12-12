// AppHeader.js
import React from 'react';
import './AppHeader.css';

const AppHeader = () => {
    const name = "DESIGN TECH SOLUTIONS";

    return (
        <div className='header'>
            <li>
                <img src='./images/logo_final.png' alt='Logo' />
                {name}
            </li>
        </div>
    );
}

export default AppHeader;
