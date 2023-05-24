import React from 'react';

const NavigationBar = () => {
    return (
        <header>
            <nav id='navbar' className='drop-shadow-md bg-blue-500 text-white py-4 container'>
                <div className="flex justify-between">
                    <div id='navbar-logo'>hey</div>
                    <div id='navbar-search'>hey</div>
                    <div id='navbar-menu'>hey</div>
                </div>
            </nav>
        </header>
    );
}

export default NavigationBar;