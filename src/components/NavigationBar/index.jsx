import React from 'react';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "./styles.css";

const hostshare_green_logo = require("../../assets/images/Hostshare-logo-green.png") 

const NavigationBar = () => {
    return (
        <header className='py-4 border-b-2 bg-white fixed top-0 left-0 right-0 m-0'>
            <nav id='navbar' className='m-0 container'>
                <div className="flex justify-between items-center">
                    <div id='navbar-logo'>
                        <Link to="/">
                            <img src={hostshare_green_logo} alt="Hostshare green logo" className='logo' />
                        </Link>
                    </div>
                    <div id='navbar-search-form'>
                        <form action="" className='inline-box'>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </form>
                    </div>
                    <div id='navbar-menu'>
                        <div className="flex flex-row items-center border-2 p-2 rounded-full">
                            <MenuIcon className='m-2' />
                            <Avatar className='avatar' />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavigationBar;