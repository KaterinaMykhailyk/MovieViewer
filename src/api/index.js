import axios from "axios";

const API_PREFIX = 'https://api.themoviedb.org/3/';
const API_KEY = 'b530e02db387c431c0d7d3fa6dfe7328';

const search = (query) => {
    switch (query) {
        case "popularmovies": return fetchPopularMovies();
        case "bestmovies": return fetchBestMovies();
        case "upcomingreleases": return fetchUpcomingReleases();
        default: return searchMovies(query);
    }
};

function searchMovies(query) {
    return axios.get(`${API_PREFIX}search/movie`, {
        params: {
            api_key: API_KEY,
            query
        }
    })
}

function fetchPopularMovies() {
    return axios.get(`${API_PREFIX}movie/popular`, {
        params: {
            api_key: API_KEY,
        }
    })

}

function fetchBestMovies() {
    return axios.get(`${API_PREFIX}movie/top_rated`, {
        params: {
            api_key: API_KEY,
        }
    })
}

function fetchUpcomingReleases() {
    return axios.get(`${API_PREFIX}movie/upcoming`, {
        params: {
            api_key: API_KEY,
        }
    })
}

function getMovie(id) {
    return axios.get(`${API_PREFIX}movie/${id}`, {
        params: {
            api_key: API_KEY
        }
    })
}

export {
    search,
    getMovie
};