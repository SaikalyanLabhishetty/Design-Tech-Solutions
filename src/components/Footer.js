// AppFooter.js
import React from 'react';
import './Footer.css';

const AppFooter = () => {
    return (
        <>
            <hr className='hr_1'></hr>
            <footer>
                <div className="footer-left">
                    <h5 style={{overflow:"hidden"}}>Contact: </h5>
                    <p>Managing Director: Tembornikar Rikhitha</p>
                </div>
                <div className="footer-center">
                    <img src='./images/logo_final.png' alt='Small Logo' className='small-logo' />
                    <h5 style={{overflow:"hidden"}}>&copy; 2023 | DESIGN TECH SOLUTIONS</h5>
                    <h6 style={{overflow:"hidden"}}>designtechsolutions@designtechsolutionsdts.org.in</h6>
                    <h6 style={{color:"orange",overflow:"hidden"}}>All Rights Reserved.</h6>
                </div>
                <div className="footer-right">
                    <h5 style={{overflow:"hidden"}}>Additional Contact Details:</h5>
                    <p>Shiva Kumar Pathi - 6281505609 <br/>
                    Amar Kumar Nicheng - 7013072159</p>
                </div>
            </footer>
        </>
    );
}

export default AppFooter;
