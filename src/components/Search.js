import React, {Fragment} from 'react';
import {InputBase, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
    return (
        <Fragment>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <InputBase
                autoCopmolete="true"
                placeholder="Search movies"
            />
        </Fragment>
    );
};

export default Search;