import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link , useParams } from 'react-router-dom';

var idno;
let url ="http://localhost:3001/Users"
export default (props) => {

  var [userData, setStateUserData] = useState({
            name: '',
            email: '',
            phone: '',
            txtConformation: ''
        });


  //get
  let {idno} = useParams();
  let formDatahanding = (e) =>{
         
    setStateUserData({...userData, [e.target.name]: e.target.value });
         
  }



  
 useEffect (()=>
         {
             axios.get(`${url}/${idno}`).then( (result)=> setStateUserData(result.data));
         },);




let  submitHandler = (e) => 
      {
  
  e.preventDefault();

     var FormData=
     {
      name: `${userData.name}`,
      email: `${userData.email}`,
      phone: `${userData.phone}`
     }
     
   
     axios.put(`{url}/${idno}`,FormData)
     .then(() => {
      // window.alert("....CREATED....");
       this.props.history.push('/hooksUser') 
       });


      }

      
        //Destructuring....
        var {name,email,phone,txtConformation} = userData

        return (<>

            <div className="container p-5">
                <h2>EDIT COMPONENT PAGE</h2>

                <form onSubmit={submitHandler.bind(this)}>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" 
                        value={name} name="name"
                        onChange={formDatahanding .bind(this)}/>

                    </div>


                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" 
                        value={email} name="email"
                        onChange={formDatahanding .bind(this)} />

                    </div>


                    <div className="mb-3">
                        <label className="form-label">Mobile No</label>
                        <input type="number" className="form-control"
                         value={phone} uname="phone"
                         onChange={formDatahanding .bind(this)}/>

                    </div>
                    <div>
                        <Link className="btn btn-success mx-2" to="/hooksUser">GOTO BACK</Link>
                        <button type="submit" className="btn btn-warning text-white" value="update">Update</button>
                    </div>
                    
                    <p className="text-primary">{txtConformation}</p>

                </form>


            </div>

        </>)

    }