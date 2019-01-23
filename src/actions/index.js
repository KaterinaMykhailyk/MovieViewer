import {SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS} from '../constants/index.js';
import {searchMovies} from '../api/index.js';

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

    return searchMovies(query)
        .then(json => dispatch(searchMoviesSuccess(query, json)));
};

export const searchMoviesRequest = (query) => {
    return {
        type: SEARCH_MOVIES_REQUEST,
        query
    }
};

export const searchMoviesSuccess = (query, json) => {
    return {
        type: SEARCH_MOVIES_SUCCESS,
        query,
        movies: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
};





