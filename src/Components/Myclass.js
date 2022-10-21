import React from "react";

import ioi from './../../src/assets/img/ioi.jpg'

var styles={
    backgroundImage:`url(${ioi})`
}



class Myclass extends React.Component
{
    //constructor
    constructor(props)
    {
        super(props);
        //step-1 state object initialization
        this.state={
            email:'Tonystark@gmail.com',
            phone:'6000000006'
        }
    }
    myfun(){
        return"This is Own Function";
    }

    //class_methods
    render(){
        return(<>
               <div className="jumbotron text-white p-5" style={styles}>
                <h1 class="text-center ">React Class Components and State and Events</h1>

                {/* step-2: Access state object properties from JSX */}
                <p> Email is : {this.state.email}</p>

                {/* step-3 Change state object data by this.setstate() */}
                <button onClick={()=>this.setState({email:'TonyStark3000@gmail.com'})}>Change My Email</button>

                <br/> <br/>

                <p>Phone is {this.state.phone}</p>

                {/* step-4: Change state object data by this.setstate() */}
                <button onClick={()=>this.setState({phone:9000000099})}>Change My Phone No</button>
               </div>

              </>)
    }
}
export default Myclass;