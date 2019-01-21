import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Tab} from '@material-ui/core';

const TabItem = () => {
    return (
        <Fragment>
                <Tab component={Link} to="/popularmovies" label="Popular Movies"/>
                <Tab component={Link} to="/bestmovies" label="Best Movies"/>
                <Tab component={Link} to="/newmoviereleases" label="New Movie Releases"/>
        </Fragment>
    );
};

export default TabItem;