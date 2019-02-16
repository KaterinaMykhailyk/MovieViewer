import React, {Component, Fragment} from 'react';
import MovieItem from '../components/MovieItem';
import Loader from '../components/Loader';
import {connect} from 'react-redux';

class MovieList extends Component {
    render() {
        const {movies, isFetching} = this.props;

        return (
        <Fragment>
            { isFetching ? <Loader /> :
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginTop: "80px"}}>
                    {movies.map((movie) => <MovieItem movie={movie} key={movie.id}/>)}
                </div>
            }
        </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const {showedMovies, moviesByQuery} = state;
    const {isFetching, lastUpdated, items: movies} = moviesByQuery[showedMovies] ||
    {
        isFetching: true,
        items: []
    };
    return {
        showedMovies,
        movies,
        isFetching,
        lastUpdated
    }
};


export default connect(mapStateToProps, null)(MovieList);

