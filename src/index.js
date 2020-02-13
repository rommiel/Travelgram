import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './styles/stylesheet.css';
import {BrowserRouter, HashRouter} from 'react-router-dom';





//to render the element on webpage
//we render it on a DOM node called 'root'
ReactDOM.render(<HashRouter><Main/></HashRouter>, document.getElementById('root'));                              