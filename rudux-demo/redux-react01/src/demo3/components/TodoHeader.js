import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux' 

class TodoHeader extends Component{
    unFinishCount=()=>{
        return this.props.todos.filter(item => item.isSelected).length
    }
    render(){
        return <div>
           <h3>亲，有{this.unFinishCount}件事没完成</h3>
           <input type="text" className="from-control"/>
        </div>
    }
}
export default connect(state=>({...state}),actions)(TodoHeader)