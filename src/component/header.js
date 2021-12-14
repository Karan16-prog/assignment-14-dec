import React from 'react';
import {useState} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from '@mui/icons-material/Menu';

import './header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    // 1. cart context
    const styleA = {
        display: `${open ? 'flex' : 'none'}`
    }
    return(
    <div className="header">
        <div className="header__logo__container">
            <div className="header__logo">A</div>
            <div className= "header__name">
                Ausbang
            </div>
        </div>

        <div className= "header__search">
                <input type="text" className = "header__searchInput" />
        </div>

        <a href='#' className='toggle__button'>
            <MenuIcon onClick={() => setOpen(!open)}/>
        </a>

        <div className='navbar__link'>
            <ul>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>Cart</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Header;