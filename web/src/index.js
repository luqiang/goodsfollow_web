import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import BasicExample   from './BasicExample';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>,document.getElementById('root'));
registerServiceWorker();
