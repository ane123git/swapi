import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
