import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CounterReducer from './store/reducers/Counter';
import StoreReducer from './store/reducers/Result';

const reducer = combineReducers({
    ctr : CounterReducer,
    res : StoreReducer
})

const store = createStore(reducer);

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
