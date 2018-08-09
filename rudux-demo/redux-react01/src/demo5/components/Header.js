import React, { Component} from 'react';
import Title from '../components/Title'
import PropTypes from 'prop-types'

class Header extends Component{
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
        return<div>
            <h3 style={{color:this.context.color}}>Header</h3>
            <Title />
        </div>
    }
}

export default Header