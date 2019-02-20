import React, {Component} from 'react';
import Movie from '../components/Movie';
import {connect} from 'react-redux';
import {fetchMovie} from "../actions/index";
import Backdrop from '@material-ui/core/Backdrop';

class MoviePage extends Component {

    componentDidMount() {
        this.props.onFetchMovie(this.props.match.params.id);
    }

    /* componentDidUpdate(prevProps) {
        if (prevProps.movieItem !== this.props.movieItem) {
            this.props.onFetchMovie(this.props.match.params.id);
        }
    } */

    render() {
        return (
                <Movie movie={this.props.movieItem}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieItem: state.movie.info
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovie: (id) => {
            dispatch(fetchMovie(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);