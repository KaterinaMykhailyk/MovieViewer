import {combineReducers} from 'redux';
import {INVALIDATE_MOVIES, SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, SHOW_MOVIES} from "../constants";

function showedMovies(state = "", action) {
    switch (action.type) {
        case SHOW_MOVIES:
            return action.movie;
        default:
            return state
    }
}

const moviesByQuery = (state = {}, action) => {
    switch (action.type) {
        case INVALIDATE_MOVIES:
        case SEARCH_MOVIES_REQUEST:
        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                [action.query]: movies(state[action.query], action)
            };
        default:
            return state
    }
};

const movies = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_MOVIES:
            return {
                ...state,
                didInvalidate: true
            };
        case SEARCH_MOVIES_REQUEST:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.movies,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};

const rootReducer = combineReducers({
    showedMovies,
    moviesByQuery
});

export default rootReducer;