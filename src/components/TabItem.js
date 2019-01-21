import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Tabs, Tab} from '@material-ui/core';

const TabItem = () => {
    return (
        <Fragment>
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                centered>

                <Tab component={Link} to="/popularmovies" label="Popular Movies"/>
                <Tab component={Link} to="/bestmovies" label="Best Movies"/>
                <Tab component={Link} to="/newmoviereleases" label="New Movie Releases"/>

            </Tabs>
        </Fragment>
    );
};

export default TabItem;