import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles';
import MainSearchPage from '../containers/MainSearchPage';
import PopularMovies from '../containers/PopularMovies';
import BestMovies from '../containers/BestMovies';
import NewMovieReleases from '../containers/NewMovieReleases';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#a1887f',
            light: '#d7ccc8',
            dark: '#795548',
            contrastText: '#000000',
        },
    },

    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Route path="/" component={MainSearchPage}/>
                <Route path="/popularmovies" component={PopularMovies}/>
                <Route path="/bestmovies" component={BestMovies}/>
                <Route path="/newmoviereleases" component={NewMovieReleases}/>
            </MuiThemeProvider>
        );
    }
}

export default App;
