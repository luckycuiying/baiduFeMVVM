import React, { Component} from 'react';
import Header from '../components/Header'
import PropTypes from 'prop-types'

class Page extends Component{
    static childContextTypes = {
        color:PropTypes.string
    }
    getChildContext(){
        return {
            color: this.state.color
        }
    }
    constructor(props){
        super();
        this.state = {
           color:'yellowgreen'
        }
    }
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
        <h3>首页</h3>
        <Header  />
        </div>
    }
}

export default Page