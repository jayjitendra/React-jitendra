//Home.js - Module
import React, { Fragment } from 'react'

// import avengers from './../../assets/images/avengers.jpeg'

import et from './../../assets/images/et.jpg'

var styles={
    backgroundImage:`url(${et})`
}

//create Home Component
function Home() 
{

   return(<Fragment>

         <div className="jumbotron text-white p-5" style={styles}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='h1 pt-5 mt-5'>Avengers Assemble</h1>
                        <h4 className="bg-success p-2 mt-3 w-75 text-center">Multiverse Sega</h4>
                    </div>

                    <div className="col-lg-6">
                        <img src="https://www.giantfreakinrobot.com/wp-content/uploads/2021/03/avengers-1.jpeg" className="w-75 mx-auto img-thumbnail" alt="hm"/>
                    </div>
                </div>
            </div>
         </div>
        
        </Fragment>)
}
export default Home;