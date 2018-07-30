import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './redux'

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
function reducer(state={number:0},action) {
    switch(action.type){
        case INCREMENT:
        return {number:action.amount+state.number}
        break
        case DECREMENT:
        return {number:state.number-action.amount}
        break
    }
    return state;
}
let store = createStore(reducer)

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            number: store.getSate().number
        }
    }
    componentDidMount(){
       this.unSubscribe = store.subscribe(()=>{
            this.setState({
                number: store.getSate().number
            })
        })
    }
    componentWillUnmount(){
        this.unSubscribe()
    }
    onAdd=()=>{
        store.dispatch({
            type:INCREMENT,
            amount:3
        })
    }
    onDecrement=()=>{
        store.dispatch({
            type:DECREMENT,
            amount:2
        })
    }
    render(){
        console.log(this.state.number)
        return(<div>
        <button onClick ={this.onAdd}>+</button>
        <p>{this.state.number}</p>
        <button onClick ={this.onDecrement}>-</button>
        </div>
        )
    }
}

ReactDOM.render(<Counter/>,document.getElementById('root'))