import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import store from '../store'
export default class Compute extends Component{
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
    render(){
        return <div>{this.state.n%2?"奇数":'偶数'}
        </div>
    }
}
