//Services.js - Module
import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

//Nested Components
import Loki from './ITServices/Loki.js'
import marvel from './ITServices/marvel.js'
import wanda from './ITServices/wanda.js'
import moon from './ITServices/moon.js'
import shehulk from './ITServices/shehulk.js';

import zz from './../../assets/images/zz.jpg'

var styles={
    backgroundImage:`url(${zz})`
}

//create Services Component
function ITServices()
{
    return(<>
    <BrowserRouter>
              <div class="container-fluid p-4" style={styles}>
                    <h1 class="text-center text-white"> MCU WEB SERIES</h1>
                    <p class="text-center text-white"><h4>From Phase-4 MCU Started WEb Series Which has Continuity to Marvel Movies in The Upcoming Phases Of MCU </h4></p>
                        
               
                <div class="container my-5">
                        <div class="row">

                            <div class="col-lg-4">
                              <ul class="list-group">

                                <li class="list-group-item">
                                    <Link to="/ITServices/Loki">Loki</Link>
                                </li>
                                <li class="list-group-item">
                                    <Link to="/ITServices/marvel">MsMarvel </Link>
                                </li>
                                <li class="list-group-item">
                                    <Link to="/ITServices/wanda">Wanda Vision</Link>
                                </li>
                                <li class="list-group-item">
                                    <Link to="/ITServices/moon">Moon Knight</Link>
                                </li>
                                <li class="list-group-item">
                                    <Link to="/ITServices/shehulk">She-Hulk: Attorney at Law</Link>
                                </li>
                             </ul>
                            </div>

                            <div class="col-lg-6">
                                {/*Nested Router */}

                                
                                    <Switch>
                                        <Route exact path="/ITServices" component={Loki} />
                                        <Route path="/ITServices/Loki" component={Loki} />
                                        <Route path="/ITServices/marvel" component={marvel} />
                                        <Route path="/ITServices/wanda" component={wanda} />
                                        <Route path="/ITServices/moon" component={moon} />
                                        <Route path="/ITServices/shehulk" component={shehulk} />
                                    </Switch> 
                                


                                {/*Nested Router */}
                            </div>
                        </div>
                </div>

                
                
            </div>
            </BrowserRouter>
          </>)
}
export default ITServices;