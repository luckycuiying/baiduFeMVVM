import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Counter from '../components/Counter';
import Compute from '../components/Compute'
import Todo from '../components/Todo'

export default class Demo2 extends Component{
    render(){
        return(
            <div>
            <Counter />
            <Compute />
            <Todo />
            </div>
            )
    }
}