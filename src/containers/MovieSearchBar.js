import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import Search from '../components/Search';
import {fetchMoviesIfNeeded} from '../actions/index';

class MovieSearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchFieldValue: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.props.location.search) {
            this.props.onFetchMoviesIfNeeded(this.props.location.search.slice(8));
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            this.props.onFetchMoviesIfNeeded(this.state.searchFieldValue);
        }
    }

    handleChange(e) {
        this.setState({
            searchFieldValue: e.target.value
        });
    }

    handleClick() {
        const {history} = this.props;
        const location = {
            pathname: '/movies',
            search: `?search=${this.state.searchFieldValue}`
        };
        history.push(location);
    }

    render() {
        return (
            <Search onChange={this.handleChange} onClick={this.handleClick} value={this.state.searchFieldValue}/>
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

export default withRouter(connect(null, mapDispatchToProps)(MovieSearchBar));

