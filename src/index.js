import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <Router>
            <App/>
        </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();

