import React, {Fragment} from 'react';
import {InputBase, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Search = (props) => {
    return (
        <Fragment>
            <IconButton  onClick={props.onClick}>
                <SearchIcon />
            </IconButton>
            <InputBase
                placeholder="Search movies"
                onChange={props.onChange}
                value={props.value}
            />
        </Fragment>
    );
};

export default Search;