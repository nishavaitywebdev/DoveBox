import React, { Component } from 'react';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { loadState, savedState } from './localStorage';

const persistedState = loadState();
let store = null;
const loggerMiddleware = createLogger();
store = createStore(reducer, persistedState, applyMiddleware(ReduxThunk, loggerMiddleware));

store.subscribe(() => {
    savedState(store.getState());
});

export default class MainApp extends Component {
    render() {
        return(
            <Provider store={store}>
                <App children={this.props.children}/>
            </Provider>
        );
    }
}
