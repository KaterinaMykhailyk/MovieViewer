import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Header from '../containers/Header';
import MoviePage from "./MoviePage";
import MovieList from "../containers/MovieList";

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
                <Route path="/" component={Header}/>
                <Switch>
                    <Route exact path="/movies" component={MovieList}/>
                    <Route path="/movies/popularmovies" component={MovieList}/>
                    <Route path="/movies/bestmovies" component={MovieList}/>
                    <Route path="/movies/upcomingreleases" component={MovieList}/>
                    <Route path="/movies/:id" component={MoviePage}/>
                </Switch>
            </MuiThemeProvider>
        );
    }
}

export default App;
