import React, { Component} from 'react';
import local from './Local'
class Password extends Component{
    
    // constructor(props){
    //     super();
    //     this.state = {
    //        Password:''
    //     }
    // }
    // componentWillMount(){
    //     let val = localStorage.getItem('Password');
    //     console.log(val)
    //     this.setState({
    //         Password:val
    //     })
    // }
    handlChange=(e)=>{
        console.log(e.tagert)
    }
    render(){
        return<div>
        <input type="text" value={this.props.Password} onChange={this.handlChange}/>
        </div>
    }
}

export default local('Password')(Password)