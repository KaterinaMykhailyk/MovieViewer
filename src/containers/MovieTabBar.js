import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tabs} from '@material-ui/core';
import {Link} from "react-router-dom";
import {Tab} from '@material-ui/core';
import {fetchMoviesIfNeeded} from "../actions";
import {withRouter} from "react-router-dom";

class MovieTabBar extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const query = this.props.history.location.pathname.slice(8);
        if (query) {
            this.props.onFetchMoviesIfNeeded(query)
        }
    }

    componentDidUpdate(prevProps) {
        const newQuery = this.props.history.location.pathname.slice(8);
        const prevQuery = prevProps.location.pathname.slice(8);
        if (newQuery && newQuery !== prevQuery) {
            this.props.onFetchMoviesIfNeeded(newQuery);
        }
    }

    handleClick() {
        this.props.onFetchMoviesIfNeeded(this.props.history.location.pathname.slice(8));
    }

    render() {
        return (
            <Tabs onClick={this.handleClick}>
                <Tab component={Link}  to="/movies/popularmovies" label="Popular Movies" />
                <Tab component={Link} to="/movies/bestmovies" label="Best Movies" />
                <Tab component={Link} to="/movies/upcomingreleases" label="Upcoming Releases" />
            </Tabs>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMoviesIfNeeded: (query) => {
            dispatch(fetchMoviesIfNeeded(query));
        }
    }
};

export default withRouter((connect(null, mapDispatchToProps)(MovieTabBar)));