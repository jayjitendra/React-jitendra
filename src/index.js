//Index.js -> Root_Module for entire project....
import React from 'react'
import ReactDom from 'react-dom'


//import bootstrap into React
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import Routings.js
import Routings from './Components/Routings.js'

import { Provider } from "react-redux";

import store from "./store";

ReactDom.render(<Provider store={store}>
    <Routings/>
</Provider>,document.getElementById('root')) 