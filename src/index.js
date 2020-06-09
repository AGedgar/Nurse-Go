import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Nosotros from './Nosotros';
import Blog from "./Blog";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <LandImage />
//   </React.StrictMode>,
//   document.getElementById('hero')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <LandSections />
//   </React.StrictMode>,
//   document.getElementById('landingSections')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Blog />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Nosotros />
//   </React.StrictMode>,
//   document.getElementById('nosotros')
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
