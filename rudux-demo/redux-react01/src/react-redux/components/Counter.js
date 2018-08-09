import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from './myReact-redux'
class Counter extends Component{
    
    add=()=>{
        this.props.add(1)
    }
    render(){
        return<div>
           {this.props.n}
           <button onClick={this.add}>+</button>
        </div>
    }
}
let mapStateToProps =(state)=>{
    return{
        n:state.number
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        add:(count)=>{
            dispatch({
                type:'ADD',
                count
            })
        },
        minus:(count)=>{
            dispatch({
                type:'MINUS',
                count
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)