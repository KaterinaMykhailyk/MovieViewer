import axios from "axios";

const API_PREFIX = 'https://api.themoviedb.org/3/';
const API_KEY = 'b530e02db387c431c0d7d3fa6dfe7328';

function searchMovies(query) {
    return axios.get(`${API_PREFIX}search/movie`, {
        params: {
            api_key: API_KEY,
            query
        }
    })
        .then(response => console.log(response.data));
}

function fetchPopularMovies () {
    return axios.get(`${API_PREFIX}movie/popular`, {
        params: {
            api_key: API_KEY,
        }
    })
        .then(response => console.log(response.data));
}

function fetchTopRatedMovies() {
    return axios.get(`${API_PREFIX}movie/top_rated`, {
        params: {
            api_key: API_KEY,
        }
    })
        .then(response => console.log(response.data));
}

function fetchNowPlayingMovies() {
    return axios.get(`${API_PREFIX}movie/now_playing`, {
        params: {
            api_key: API_KEY,
        }
    })
        .then(response => console.log(response.data));
}

function fetchMovie(id) {
    return axios.get(`${API_PREFIX}movie/${id}`, {
        params: {
            api_key: API_KEY
        }
    })
        .then(response => console.log (response.data));
}

export {
    searchMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    fetchMovie
};