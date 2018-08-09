import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import store from '../store'
export default class Counter extends Component{
    constructor(){
        super();
        this.state = {
            n: store.getState().counter.number
        }
    }
    componentDidMount(){
        this.un = store.subscribe(()=>{
            this.setState({
                n: store.getState().counter.number
            })
        })
    }
    componentWillUnmount(){
        this.un();
    }
    add=()=>{
        store.dispatch({
            type:'ADD',
            count:3
        })
    }
    minus=()=>{
        store.dispatch({
            type:'MINUS',
            count:2
        })
    }
    render(){
        console.log(this.state.n)
        return <div>
            <button onClick ={this.add} >+</button>
            <span>{this.state.n}</span>
            <button onClick = { this.minus}>-</button>
        </div>
    }
}
