import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Title extends Component{
    static contextTypes ={
        color:PropTypes.string
    }
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
        return<div style={{color:this.context.color}}>
            标题页面
        </div>
    }
}

export default Title