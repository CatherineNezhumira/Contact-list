import ReactDOM from 'react-dom';
import React from 'react';
import SearchPanel from './components/SearchPanel';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/Contact.js'
import { Provider } from 'react-redux'
import contactMiddleware from './middleware/contactRequests'

const store = createStore(reducer, applyMiddleware(contactMiddleware));

store.subscribe();

window.addEventListener('load', () => {
    ReactDOM.render(
        <Provider store={store}>
          <SearchPanel/>
        </Provider>,
        document.getElementById('root'));
});