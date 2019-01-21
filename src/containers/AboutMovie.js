import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Movie from '../components/movie';

class AboutMovie extends Component {
    render () {
        return (
            <div>
                <Movie />

                <ul>
                    <li><Link to="/similarmovies">Similar Movies</Link></li>
                    <li><Link to="/recommendations">Recommendations</Link></li>
                </ul>
            </div>
        )
    }
}

export default AboutMovie;