import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">

            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <Link to="/">
                    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""/>
                </Link>
            </div>

            <div className="header__middle">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input type="text" placeholder="Search mail" />
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>

            <div className="header__right">

            </div>



        </div>
    )
}

export default Header
