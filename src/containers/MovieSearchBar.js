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
        if (this.props.history.location.search) {
            this.props.onFetchMoviesIfNeeded(this.props.history.location.search);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.history.location.search !== prevProps.location.search) {
            this.props.onFetchMoviesIfNeeded(this.props.history.location.search);
        }
    }

    handleChange(e) {
        this.setState({
            searchFieldValue: e.target.value
        });
    }

    handleClick() {
        const {history} = this.props;

        history.push({
            pathname: "/movies",
            search: this.state.searchFieldValue,
        });

        /* this.setState({
            searchFieldValue: ""
        });
     */
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

