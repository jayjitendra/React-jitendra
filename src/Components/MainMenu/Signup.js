import React, { Component} from "react";
import axios from "axios";

const url = "http://localhost:3001/Users" 

export default class signp extends Component
{
    
    constructor(props) {
        super(props)

        this.state = {
            uname: '',
            email: '',
            phone: '',
            txtConformation:''

        }
    }

    //Name_input_textbox
    unameHandling = (e) =>{
        this.setState( { uname: e.target.value })
    }

    //Email_input_textbox
    emailHandling = (e) =>{
        this.setState( { email: e.target.value })
    }

    //Phone_input_textbox
    phoneHandling = (e) =>{
        this.setState( { phone: e.target.value })
    }



    submitHandler = (e) =>
    {
        var FormData =
        {
           'name':this.state.uname,
           'email':this.state.email,
           'phone':this.state.phone

        }
        
        //alert(JSON.stringify(FormData));
        /* Conformation with alert box
        axios.post(url,formdata)
        .then(()=> window.alert("...CREATED...."))
        .catch(()=> window.alert("ERROR"));
        */
        /* conformation with text formation
        axios.post(url,FormData)
        .then(()=> this.setState({ txtConformation:'Accounted Created...'}))
        .catch(()=> this.setState({ txtConformation:'Accounted Failed...'}));
        */
       
        axios.post(url, FormData)
        .then(()=>{
             this.props.history.push('/restapi')} );
    }  

    render() {
        //Destructing...  
        var {uname,email,phone, txtConformation} = this.state

        return (<>
            <div className="container p-3">

                <h4 className="py-3 text-center">User Registration</h4>

                <div className="container w-50">

                    <form onSubmit={this.submitHandler.bind(this)}>

                        <div class="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" class="form-control" 
                            value={uname}
                            onChange={this.unameHandling.bind(this)} />
                        </div>
                        
                        <div class="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" class="form-control"
                            value={email}
                            onChange={this.emailHandling.bind(this)}/>
                        </div>

                        <div class="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="number" class="form-control"
                            value={phone}
                            onChange={this.phoneHandling.bind(this)}/>
                        </div>

                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary">CREATE ACCOUNT</button>
                        </div> 

                        <p class="text-primary">{ txtConformation }</p>
                    



                    </form>

                </div>

            </div>
        </>)
    }
}