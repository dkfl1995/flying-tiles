import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import reducer from './reducers/tiles';
import AppContainer from './components/js/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



const store = createStore(reducer, applyMiddleware(thunk));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <AppContainer /*tiles={store.getState().tiles}*/ />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
