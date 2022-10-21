//About.js - Module
import React, {Fragment} from 'react'


import we from './../../assets/images/we.jpg'

var styles={
    backgroundImage:`url(${we})`
}

//create About Component
function About()
{
    return(<Fragment>
        <div  style={styles}>
        <h1 className="bg-danger p-2 mt-3 w-100 text-white text-center">SCARLET WITCH</h1>

        <div className="col-lg-6">
            <img src="https://fandomwire.com/wp-content/uploads/2022/06/Wanda-Powers.jpg" className="w-100 mx-auto img-thumbnail" alt="wanda"/>
        </div>
        <p className="para text-white">
        Wanda Maximoff is a native of Sokovia who grew up with her fraternal twin brother, Pietro. Born with the latent mythical ability to harness Chaos Magic, 
        she developed a hatred against Tony Stark and rallied anti-American protests after the Novi Grad Bombings killed her parents.
        <br/>
        Years later, they both volunteered to undergo genetic experimentation overseen by HYDRA's Baron Wolfgang von Strucker, using Loki's scepter, to potentially give them powers. 
        One of the few survivors of the experiments, along with her brother, Wanda found herself with a variety of abilities.
        <br/>
        Billy and Tommy. Vision, Billy, and Tommy possessed free will and independent thought, along with their own superpowers.
        </p>
        <hr/>
        </div>

    </Fragment>)
}
export default About;