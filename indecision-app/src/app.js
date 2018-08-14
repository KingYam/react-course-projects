// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'; // CSS reset -- normalize CSS across all OSs/browsers
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));