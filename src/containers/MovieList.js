import React, {Component, Fragment} from 'react';
import MovieItem from '../components/MovieItem';

class MovieList extends Component {
    render () {
        return (
            <Fragment>
                <p>This is Movie List which consists of MovieItems</p>
                <MovieItem />
            </Fragment>
        )
    }
}

export default MovieList;