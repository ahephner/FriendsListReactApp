import React from 'react';
import elevenfifty from './elevenfifty.png';

const Header = () => {

    return (
        <nav className="navbar navbar-inverse">
            <img src={elevenfifty} alt="efalogo" className="logo"/>
            <h1> Friends List Application</h1>
        </nav>
    );
}

export default Header;