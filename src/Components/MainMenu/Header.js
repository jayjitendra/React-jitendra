//Header.js Module
import React from 'react'

//Router Package
import {NavLink} from 'react-router-dom';

function Header()
{
    var ManuNames = ["Home","About","Services","ITServices","Contact", "Myclass", 
    "Lifecycle","Restapi","RB", "Signup", "Rrc", "RHuseState", "RHuseEffectState",
    "Pagination","Hooksuser","HooksSignup","HooksRedux"]
    return(
        <>
           
             {/* Links for Menu */}
            
             <nav className="navbar navbar-expand-lg navbar-light" 
             style= 
                  {
                    {  backgroundColor:'#475562',
                       borderBottom: '0.5px white solid', 
                       borderTop: '0.5px white solid'
                  }
                }>

            <div className="container-fluid">
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    {/*<ul class="navbar-nav">
                    <li class="nav-item">
                    <NavLink activeStyle={{ backgroundColor:'black'}} className="nav-link  text-white" to="/home">Home</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink activeStyle={{ backgroundColor:'black'}} className="nav-link text-white" to="/about">About</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link text-white" activeClassName="bg-dark"  to="/services">Services</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link text-white" activeClassName="bg-dark" to="/contact">Contact</NavLink>
                    </li>
                    </ul>*/}

                    <ul className="navbar-nav">
                        {
                           ManuNames.map(( data,i)=> 
                           <li className="nav-item" key={i}>
                            <NavLink activeClassName="bg-dark" className="nav-link text-white" to={`/${data.toLowerCase()}`}>{data}</NavLink>
                           </li>)
                           
                        }
                    </ul>

            </div>
            </div>
            </nav>

             {/* Links for Menu */}
        </>
    )

}
export default Header;
