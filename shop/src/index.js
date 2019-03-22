import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let contacts  = [
  {name: 'iPhone', description: 'Описание 1'},
  {name: 'Samsung', description: 'Описание 2'},
  {name: 'Nokia', description: 'Описание 3'},
  {name: 'Siemens', description: 'Описание 4'}
];

ReactDOM.render(<App contacts={contacts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
