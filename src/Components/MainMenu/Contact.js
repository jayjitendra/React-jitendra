//Contact.js - Module
import React from 'react'

import et from './../../assets/images/et.jpg'

var styles={
    backgroundImage:`url(${et})`
}

//create Contact Component
function Contact()
{
    return(<>
    <div style={styles}>
        <h1 className="text-center text-info">Guardians of the Galaxy</h1>
        <p  className="para text-white">
        Brash space adventurer Peter Quill. finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe
        </p>
        <div className="col-lg-12">
        <img src="https://images4.alphacoders.com/115/1151718.jpg" className="w-100 mx-auto img-thumbnail" alt="av" />

        </div>

        <hr/>
        </div>
    </>)
}
export default Contact;