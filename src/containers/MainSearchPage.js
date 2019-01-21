import React, {Component, Fragment} from 'react';
import Header from './Header';
import MovieList from './MovieList';


class MainSearchPage extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <MovieList />
            </Fragment>
        )
    }
}

export default MainSearchPage;
