import { React, useState, useEffect } from 'react';
import './mobilenav.css';
import { Link } from 'react-router-dom';
import { Arrow, Hamburger } from '../images';

const Mobilenav = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const bodyElement = document.querySelector('body');
        if (bodyElement) {
            if (isOpen) {
                window.scrollTo(0, 0);
                bodyElement.style.overflow = 'hidden';
            } else {
                bodyElement.style.overflow = 'auto';
            }
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className='mobilenav'>
            <div className={`hamburger-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <img className='HamburgerImg' alt="Hamburger" src={Hamburger} />
            </div>

            <div className={`menu-container ${isOpen ? 'open' : ''}`}>
                <smaller>MOHID TANVEER™</smaller>
                <ul>
                    <li><mobile><Link onClick={handleLinkClick} to="/">Home <img className='ArrowImg' alt="Right Arrow" src={Arrow} /></Link></mobile></li>
                    <li><mobile><Link onClick={handleLinkClick} to="/about">About <img className='ArrowImg' alt="Right Arrow" src={Arrow} /></Link></mobile></li>
                    <li><mobile><Link onClick={handleLinkClick} to="/work">Work <img className='ArrowImg' alt="Right Arrow" src={Arrow} /></Link></mobile></li>
                    <li><mobile><Link onClick={handleLinkClick} to="/personal">Personal <img className='ArrowImg' alt="Right Arrow" src={Arrow} /></Link></mobile></li>
                    <br />
                    <li><mobilelower>
                        <div className="link-container">
                            <a href="https://github.com/mohid-tanveer" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <div className='linkedin-container'>
                                <a href="https://www.linkedin.com/in/mohidtanveer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>          
                        </div>
                    </mobilelower></li>
                </ul>
            </div>
        </div>
    );
}

export default Mobilenav;