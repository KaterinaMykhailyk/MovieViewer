import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';
import {Link} from 'react-router-dom';


const Header = () => {
    return <Paper>
        <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            centered>
            <Tab label="Popular Movies" />
            <Tab label="Best Movies"/>
            <Tab label="New Movie Releases"/>
        </Tabs>
    </Paper>
};

export default Header;
