import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from "./Nav";
import LandImage from "./LandImage";
import LandSections from "./LandingSections"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.getElementById('nav')
);

ReactDOM.render(
  <React.StrictMode>
    <LandImage />
  </React.StrictMode>,
  document.getElementById('hero')
);

ReactDOM.render(
  <React.StrictMode>
    <LandSections />
  </React.StrictMode>,
  document.getElementById('landingSections')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
