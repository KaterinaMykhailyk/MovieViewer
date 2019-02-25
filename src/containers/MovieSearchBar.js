import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import Search from '../components/Search';
import {fetchMoviesIfNeeded} from '../actions/index';

class MovieSearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchFieldValue: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        if (this.props.location.search) {
            this.props.onFetchMoviesIfNeeded(this.props.location.search.slice(6))
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search && this.props.location.search !== prevProps.location.search) {
            this.props.onFetchMoviesIfNeeded(this.props.location.search.slice(6));
        }

    }

    handleChange(e) {
        this.setState({
            searchFieldValue: e.target.value
        });
    }

    handleClick() {
        const {history} = this.props;
        let location;
        if (this.state.searchFieldValue) {
            location = {
                pathname: '/movies',
                search: `?name=${this.state.searchFieldValue}`
            }
        } else {
            location = {
                pathname: '/',
            };
        }
        history.push(location);
    };

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <Search onChange={this.handleChange} onClick={this.handleClick} value={this.state.searchFieldValue} onKeyPress={this.handleKeyPress}/>
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

