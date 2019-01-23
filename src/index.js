import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './containers/App';
import store from './store/index.js';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

