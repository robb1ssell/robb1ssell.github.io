import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { env } from './data/messageConfig';

ReactDOM.render(<App env={env} />, document.getElementById('root'));
registerServiceWorker();
