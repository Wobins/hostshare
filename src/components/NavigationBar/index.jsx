import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import serializeFormQuery from '../../utils/serializeFormQuery';
import capitalizeAfterEqual from '../../utils/capitalizeAfterEqual';
import { Avatar, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import "./styles.css";

const hostshare_green_logo = require("../../assets/images/Hostshare-logo-green.png"); 

const NavigationBar = () => {
    const location =  useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    const city_query = searchParams.get("city");
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const queryString = serializeFormQuery(formData);
        navigate('/search');
        setSearchParams(capitalizeAfterEqual(queryString));
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
                    <div id='navbar-search-form' className='border rounded-full p-2'>
                        <form 
                            id='search-form'
                            onSubmit={handleSubmit} 
                            className='flex'
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: 'fit-content',
                                color: 'text.secondary',
                                '& svg': {
                                  m: 1.5,
                                },
                                '& hr': {
                                  mx: 0.5,
                                },
                            }}
                        >   
                            <div className=''>
                                <input 
                                    className='border mr-2 block' 
                                    type="text" 
                                    // value={city}
                                    name='city' 
                                    // onChange={(e) => setCity(e.target.value)} 
                                />
                            </div>
                            <Divider orientation="vertical" variant='middle' className='ml-4' flexItem />
                            <div>
                                <input className='border mx-2' type="date" />
                            </div>
                            <Divider orientation="vertical" variant='middle' className='mr-2' flexItem />
                            <div className='w-30'>
                                <input className='border ml-2' type="number" />
                            </div>
                            <button 
                                type="submit" 
                                style={{backgroundColor: "#329a9a"}} 
                                className='border p-1 rounded-full text-white'
                            >
                                <SearchIcon />
                            </button>
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