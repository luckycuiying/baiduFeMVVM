import React, { Component} from 'react';
import local from './Local'

class UserName extends Component{
    // constructor(props){
    //     super();
    //     this.state = {
    //        userName:''
    //     }
    // }
    // componentWillMount(){
    //     let val = localStorage.getItem('username');
    //     console.log(val)
    //     this.setState({
    //         userName:val
    //     })
    // }
    handlChange=(e)=>{
        console.log(e.tagert)
    }
    render(){
        return<div>
        <input type="text" value={this.props.username} onChange={this.handlChange}/>
        </div>
    }
}

export default local('username')(UserName)