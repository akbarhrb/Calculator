import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function header(){
    return(
        <div className='header'>
            <ul>
                <Link to='/home'>
                 <li>HOME</li>
                </Link>
                <Link to='/about'>
                <li>ABOUT</li>
                </Link>
                <Link to='https://www.youtube.com/'>
                <li>CONTACT US</li>
                </Link>
                <Link to='/calculator'>
                <li>Calculator</li>
                </Link>
                
            </ul>
        </div>
    )
}
export default header;