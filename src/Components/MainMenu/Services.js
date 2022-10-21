//Services.js - Module
import React from 'react'


//imort external local json data into component
import ServiceData from './../../assets/json/Services.json'

import ett from './../../assets/images/ett.jpg'

var styles={
    backgroundImage:`url(${ett})`
}


//styles
//var bgc={backgroundColor:'#12151c'}

    



//create Services Component
function Services()
{
// Arrays      

    return(<React.Fragment>
        <div className="container-fluid" style={styles}>
             <div className="container p-5 text-center">
                <h1 className="pt-2 pb-5 text-white">ETERNALS</h1>
                <div className="row">

                   {
                      ServiceData.map( ( data,i) =>{
                        return( 
                            <div className="col-lg-4">
                              <div className="card text-center text-white p-3" style={styles}>
                              <div className="card-body">
                                <h3 className="py-3">{ data.title}</h3>
                                <p className="text-justify"> { data.description} </p>

                              </div>
                              </div>

                           </div>)
                      })
                   }


                    {/*<div className="col-lg-4">
                        <div className="card text-center text-white p-3" style={bgc}>
                            <div className="card-body">
                                <h3 className="py-3">SERSI</h3>
                                <p className="text-justify"> In Eternals, Sersi has a strong connection to humanity. 
                                Additionally, she and Ikaris are soulmates, and their relationship spans centuries
                                it's clear that Sersi is the strongest Eternal Arishem sent to Earth, and that she will be a valuable ally to the Avengers</p>

                            </div>
-
                        </div>

                    </div>

                    <div className="col-lg-4">
                        <div className="card text-center text-white p-3" style={bgc}>
                            <div className="card-body">
                                <h3 className="py-3">IKARIS</h3>
                                <p className="text-justify">karis is a member of the Eternals, a near-immortal evolutionary offshoot of humanity created by the Celestials. 
                                He was born over twenty thousand years ago under another name which has not been revealed
                                Ikaris. The Icarus of Greek myth was not a god. He was the son of Daedalus, a great inventor who was trapped in the service of King Minos of Crete.</p>

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4">
                        <div className="card text-center text-white p-3" style={bgc}>
                            <div className="card-body">
                                <h3 className="py-3">THENA</h3>
                                <p className="text-justify">Thena possesses great superhuman strength, numerous times stronger than any normal human being. 
                                Thena is the third strongest Eternal of her time, surpassed only by Ikaris and Gilgamesh, and with their deaths, she is now the strongest Eternal alive.
                                Interestingly, Thanos is related by blood to Thena</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4">
                        <div className="card text-center text-white p-3" style={bgc}>
                            <div className="card-body">
                                <h3 className="py-3">THENA</h3>
                                <p className="text-justify">Thena possesses great superhuman strength, numerous times stronger than any normal human being. 
                                Thena is the third strongest Eternal of her time, surpassed only by Ikaris and Gilgamesh, and with their deaths, she is now the strongest Eternal alive.
                                Interestingly, Thanos is related by blood to Thena</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4">
                        <div className="card text-center text-white p-3" style={bgc}>
                            <div className="card-body">
                                <h3 className="py-3">THENA</h3>
                                <p className="text-justify">Thena possesses great superhuman strength, numerous times stronger than any normal human being. 
                                Thena is the third strongest Eternal of her time, surpassed only by Ikaris and Gilgamesh, and with their deaths, she is now the strongest Eternal alive.
                                Interestingly, Thanos is related by blood to Thena</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4">
                        <div className="card text-center text-white p-3" style={bgc}>
                            <div className="card-body">
                                <h3 className="py-3">THENA</h3>
                                <p className="text-justify">Thena possesses great superhuman strength, numerous times stronger than any normal human being. 
                                Thena is the third strongest Eternal of her time, surpassed only by Ikaris and Gilgamesh, and with their deaths, she is now the strongest Eternal alive.
                                Interestingly, Thanos is related by blood to Thena</p>
                            </div>
                        </div>

                     </div>*/}

                    

                </div>

             </div>

        </div>
        <hr/>
    </React.Fragment>)
}
export default Services;