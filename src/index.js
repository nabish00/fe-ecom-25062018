import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


import rootReducers from './reducers/index';
import App from './App';


const store = createStore(
    rootReducers,
    applyMiddleware(thunkMiddleware)
  );

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
