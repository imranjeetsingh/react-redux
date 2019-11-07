import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CounterReducer from './store/reducers/counter';
import StoreReducer from './store/reducers/Result';

const logger = store =>{
    return next =>{
        return action =>{
            console.log('Middleware dispatching', action, store)
            const result = next(action)
            console.log('middleware next state', store.getState())
            return result
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    ctr : CounterReducer,
    res : StoreReducer
})

const store = createStore(reducer,composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
