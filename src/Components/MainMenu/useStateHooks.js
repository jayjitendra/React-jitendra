import { React, useState } from 'react'

export default (props) => {


    var [stateEmail,setStateEmail] = useState("kumar@gmail.com");
    let handleStateEmail = () =>
    {

        setStateEmail("saikiran2gmail.com");
    }


return(<>
             
 <div className='container p-5'>
    <h1>REACT Hooks usestate</h1>
      
       {stateEmail}
       
       <br></br>
   
    <button onClick={handleStateEmail}>Update Email</button>
 </div>
       
      

</>)
 }

