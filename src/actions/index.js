import { SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, INVALIDATE_MOVIES, SHOW_MOVIES, FETCH_MOVIE_REQUEST,FETCH_MOVIE_SUCCESS } from '../constants/index.js';
import { searchMovies, getMovie } from '../api/index.js';

// AC for movies currently in search

 export function showMovies (movie) {
    return {
        type: SHOW_MOVIES,
        movie
    }
}

// AC for API requests

export const fetchMoviesIfNeeded = query => (dispatch, getState) => {
    if (shouldFetchMovies(getState(), query)) {
        return dispatch(fetchMovies(query))
    }
};

export const shouldFetchMovies = (state, query) => {
    const movies = state.moviesByQuery[query];
    if (!movies) {
        return true
    }
    if (movies.isFetching) {
        return false
    }
    return movies.didInvalidate
};

export const fetchMovies = query => dispatch => {

    dispatch(searchMoviesRequest(query));
    dispatch(showMovies(query));

    return searchMovies(query)
        .then(data => dispatch(searchMoviesSuccess(query, data)));
};

export const searchMoviesRequest = query => {
    return {
        type: SEARCH_MOVIES_REQUEST,
        query
    }
};

export const searchMoviesSuccess = (query, json) => {
    return {
        type: SEARCH_MOVIES_SUCCESS,
        query,
        movies: json.data.results.map(result => result),
        receivedAt: Date.now()
    }
};

export const invalidateMovies = query => ({
    type: INVALIDATE_MOVIES,
    query
});

// AC for individual movie by ID

export const fetchMovie = id => dispatch => {

    dispatch(fetchMovieRequest(id));

    return getMovie(id)
        .then(data => dispatch(fetchMovieSuccess(id, data)));
};

export const fetchMovieRequest = id => {
    return {
        type: FETCH_MOVIE_REQUEST,
        id
    }
};

export const fetchMovieSuccess = (id, json) => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        id,
        movie: json.data,
        receivedAt: Date.now()
    }
};



