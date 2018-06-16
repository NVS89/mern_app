import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './helpers/store';
import './main.styl';
import Page from './containers/Page';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Page />
    </Provider>, 
    document.getElementById('content')
);
