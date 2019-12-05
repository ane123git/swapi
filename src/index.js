
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
