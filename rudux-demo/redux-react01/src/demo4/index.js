import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import UserName from '../components/UserName';
import Password from '../components/Password'

export default class Demo2 extends Component{
    render(){
        return(
            <div>
            <UserName />
            <Password />
            </div>
            )
    }
}