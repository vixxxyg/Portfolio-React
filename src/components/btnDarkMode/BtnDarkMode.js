import {useState, useEffect, useRef} from 'react';
import "./styles.css";
import sun from "./sun.svg";
import moon from "./moon.svg";
import React from "react";

const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useState('light');
    const btnRef = useRef(null);

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [darkMode]);
   
    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }
    
    return ( 
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}
 
export default BtnDarkMode;
