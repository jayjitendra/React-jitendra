import React, { Component} from "react";

class Lifecycle extends Component {
    //Constructer is Mounting method
    constructor(props)
    {
        super(props);
        this.state = {}
        console.log(`****Constructor is Mounting method****`)

    }


    componentWillMount(){
        console.log(`*****this.componentWillMount_is_Mounting_method`)
    }



    
    //Render is Mouting Method
    render() {
        return(<>
             <div className="p-5 text-center">

                <h2> REACT CLASS COMPONENT LIFE CYCLE PROCESS</h2>

             </div>


        </>)
    }
}

export default Lifecycle