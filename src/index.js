import store, {history} from './store';
import App from './containers/app';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import React from 'react';
import {render} from 'react-dom';

import './index.css';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App/>
            </div>
        </ConnectedRouter>
    </Provider>, target);