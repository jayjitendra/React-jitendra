import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

//global VARIABLE FOR restapi_url
var idno;


export default class view extends Component
{
    
    constructor(props) {
        super(props)

        this.state = {
            //viewdata:{}

        }
    }

    render(){
        idno = this.props.match.params.idno
        //this.props-> history,location,match
        console.log(idno)
        return(<>
            <div className="container p-5">
                 <h2>VIEW COMPONENT PAGE</h2>
                 <p>
                    {idno} th Record Data
                 </p>

                 <ul>
                    <li>{this.state.id}</li>
                    <li>{this.state.name}</li>
                    <li>{this.state.email}</li>
                    <li>{this.state.phone}</li>
                 </ul>

                 <Link className="btn btn-success" to="/restapi">GOTO BACK</Link>

            </div>
        </>)
       
        
    }
 
    //Restapi_calls
    componentDidMount()
    {
        const url= `http://localhost:3001/Users/${idno}`
        axios.get(url).then((result) => this.setState( result.data)); 
    }


}




