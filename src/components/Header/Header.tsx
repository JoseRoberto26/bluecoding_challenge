import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
//import Logo from '../../assets/logo.png';
import './Header.style.scss';

const Header = () => { 

    return (
        <AppBar>
            <Toolbar className='header-toolbar'>
                <Typography variant="h3" className={'header-title'}>
                Get Giphy
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default Header;