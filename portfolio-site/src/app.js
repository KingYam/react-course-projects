// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'; // CSS reset -- normalize CSS across all OSs/browsers
import './styles/styles.scss';


ReactDOM.render(<AppRouter />, document.getElementById('app'));