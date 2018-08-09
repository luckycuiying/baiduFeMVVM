import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter';
import { Provider } from './components/myReact-redux'
import  store from './components/store'

export default class Demo2 extends Component{
    render(){
        return(
            <div>
            <Provider store ={ store }>
                <Counter />
            </Provider>
            </div>
            )
    }
}