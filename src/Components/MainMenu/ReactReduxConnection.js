import React, { Component } from "react";
import { connect } from "react-redux";
import empAction from '../../actions/empAction';
import usersAction from '../../actions/usersAction';
import StudentsAction from '../../actions/studentsAction';
import { bindActionCreators } from "redux"

class ReduxReactConnection extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    componentDidMount() {
        this.props.empAction();
        this.props.usersAction();
        this.props.StudentsAction();
        
    }
    render() {
        return (<>
            <div className="container py-2"> 
            <h2 className="text-center">ReduxReactConnection Example</h2>

            
            <h2>Synchronous Data From Redux Actions</h2>
            {
                this.props.empdata.map((res,i)=>{
                    return (<ul key={i}>
                        <li>{res.id}</li>
                        <li>{res.name}</li>
                        <li>{res.email}</li>
                    </ul>) 
                })
               
            }

            <h2>Asynchronous Data-1 [GLOBAL RESTAPI] From Redux-Actions</h2>
            {
              
              this.props.usersdata.map((res,i)=>{
                  return(<ul key={i}>
                      <li>{res.id}</li>
                      <li>{res.name}</li>
                      <li>{res.email}</li>
                  </ul>)
              })

            }

            {/*<h3>Asynchronous Data-2 [LOCAL RESTAPI] From Redux-Actions</h3>

            {
               this.props.studentsdata.map((res,i)=>
               {
                  return(<ul key={i}>
                      <li>{res.id}</li>
                      <li>{res.name}</li>
                      <li>{res.email}</li>
                  </ul>)
               })


            }*/}

          </div>

          </>)
    }

}
const mapStateToProps = (state) => {
    console.log(state)
    return ({
        empdata: state.empReducer,
        usersdata: state.usersReducer,
        studentsdata: state.studentsReducer
    })
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({empAction,usersAction,StudentsAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps ) (ReduxReactConnection)