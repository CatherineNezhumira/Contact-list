import ReactDOM from 'react-dom';
import React from 'react';
import MainPage from './components/MainPage';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import { Provider } from 'react-redux'
import contactMiddleware from './middleware/contactRequests'

const store = createStore(reducer, applyMiddleware(contactMiddleware));

store.subscribe(() =>
    console.log(store.getState())
);

window.addEventListener('load', () => {
    ReactDOM.render(
        <Provider store={store}>
          <MainPage/>
        </Provider>,
        document.getElementById('root'));
});