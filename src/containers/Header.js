import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import MovieSearchBar from './MovieSearchBar';
import MovieTabBar from './MovieTabBar';

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <MovieSearchBar/>
                <MovieTabBar/>
            </Toolbar>
        </AppBar>
    )
};

export default Header;
