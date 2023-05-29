import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "./styles.css";

const hostshare_green_logo = require("../../assets/images/Hostshare-logo-green.png") 

const NavigationBar = () => {
    const location =  useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    const city_query = searchParams.get("city");
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (location.pathname === "/") {
            navigate(`search?city=${city}`)
        } else if (location.pathname.includes("/search?city=")) {
            let params = {city: city};
            setSearchParams(params);
        } else {
            console.log("hoha")
        }
    }

    return (
        <header className='z-40 py-4 border-b-2 bg-white sticky top-0 right-0 m-0'>
            <nav id='navbar' className='lg:container px-4'>
                <div className="flex justify-between items-center">
                    <div id='navbar-logo' className=''>
                        <Link to="/">
                            <img src={hostshare_green_logo} alt="Hostshare green logo" className='logo' />
                        </Link>
                    </div>
                    <div id='navbar-search-form' className=''>
                        <form onSubmit={handleSubmit} className='inline-block'>
                            <input 
                                className='border' 
                                type="text" 
                                value={city}
                                name='city' 
                                onChange={(e) => setCity(e.target.value)} 
                            />
                            <input className='border' type="date" />
                            <input className='border' type="number" />
                            <button type="submit">search</button>
                        </form>
                    </div>
                    <div id='navbar-menu' className=''>
                        <div className="flex flex-row items-center border-2 px-2 rounded-full">
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