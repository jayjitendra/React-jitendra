//Routings.js - Module
import React from 'react'

//Functional_components
import Header from './MainMenu/Header.js'
import Home from './MainMenu/Home.js'
import About from './MainMenu/About'
import Services from './MainMenu/Services.js'
import Contact from './MainMenu/Contact'
import Footer from './Footer.js'
import Pagenotfound from './MainMenu/Pagenotfound'
import ITServices from './MainMenu/ITServices.js'


//import ReactReduxConnection from './MainMenu/ReactReduxConnection.js'

// Class_components
import Myclass from './Myclass.js'
import Lifecycle from './MainMenu/Lifecycle'
import Restapi from './MainMenu/Restapi'
import View from './MainMenu/RESTAPI/view'
import Edit from './MainMenu/RESTAPI/Edit'
import ReactBootstrap from './MainMenu/Reactbootstrap';
import Signup from './MainMenu/Signup';
import ReactReduxConnection from './MainMenu/ReactReduxConnection.js'

//React Hooks
import RHuseState from './MainMenu/useStateHooks'
import RHuseEffect from './MainMenu/useEffectHooks'
import Pagination from './MainMenu/Pagination'
import hooksUser from './HooksAPI/hooksUser'
import HooksView from './HooksAPI/hooksView'
import HooksEdit from './HooksAPI/hooksEdit'
import HooksSignup from './HooksAPI/hooksSignup'
import HooksRedux from './HooksRedux/hooksRedux'


//Router Package
import { BrowserRouter, Route,Switch ,Redirect} from 'react-router-dom'

//Routing setup
function Routings()
{
    return(<BrowserRouter>
              
             {/* NavBar Links*/}
             <Header/>
             {/* NavBar Links*/}

    <Switch>       
            {/* Load Home Component as default Page of project*/}
            <Route exact path="/" component={Home} />
            
            {/* <home/> */}
            <Route path="/home" component={Home} />

            {/* <About/> */}
            <Route path="/about" component={About} />

            {/* <Services/> */}
            <Route path="/services" component={Services} />

            {/* <ITServices/> */}
            <Route path="/ITservices" component={ITServices} />

            {/* <Myclass/> */}
            <Route path="/Myclass" component={Myclass} />

            {/* <Lifecycle/> */}
            <Route path="/Lifecycle" component={Lifecycle} />

            {/* <Restapi/> */}
            <Route exact path="/restapi" component={Restapi} />

            {/* <view/> with Router parameter */}
            <Route exact path="/restapi/view/:idno" component={View} />

            {/* <Edit/> with Router parameter */}
            <Route exact path="/restapi/edit/:idno" component={Edit} />
            
            {/* <Contact/> */}
            <Route path="/contact" component={Contact} />
            
            {/* <ReactBootstrap/> */}
            <Route exact path="/rb" component={ReactBootstrap} />

            {/* < ReactReduxConnection/> */}
            <Route exact path="/rrc" component={ReactReduxConnection} />

            
            {/* <Signup/> */}
            <Route exact path="/signup" component={Signup} />

            {/* <RHuseState/> */}
            <Route exact path="/rhuseState" component={RHuseState}/>


             {/* <RHuseEffect/> */}
             <Route exact path="/rhuseEffect" component={RHuseEffect}/>

             {/* <Pagination/> */}
             <Route exact path="/pagination" component={Pagination}/>

             {/* <Hooksuser/> */}
             <Route exact path="/hooksUser" component={hooksUser}/>
             <Route exact path="/hooksUser/view/:idno" component={HooksView}/>
             <Route exact path="/hooksUser/edit/:idno" component={HooksEdit}/>
             
             {/* <HooksSignup/> */}
             <Route exact path="/HooksSignup" component={HooksSignup}/>

             {/* <HooksRedux/> */}
             <Route exact path="/HooksRedux" component={HooksRedux}/>

            {/* auto redirection to home if invalid path from url address*/}
            <Redirect to="/home"/>

            {/* <Pagenotfound/> */}
            <Route component={Pagenotfound} />

    </Switch>

            {/*Footer Components */}
            <Footer/>
            {/*Footer Components */}
        
           </BrowserRouter>)
}
export default Routings;