import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../store";
import actions from '../store/action/todo'

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: store.getState().todo
        };
    }
    componentDidMount() {
        this.un = store.subscribe(() => {
            this.setState({
                todos: store.getState().todo
            });
        });
    }
    componentWillUnmount() {
        this.un();
    }
    handlKey = e => {
        if(e.keyCode==13){
            store.dispatch({
                actions.addTodo(e.target.value)
            });
        }
        // store.dispatch({
        //     type: "ADDTODO",
        //     content: e.target.value
        // });
    };
    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.handlKey} />
                {this.state.todos.map((item, index) => {
                    return <li key={item + 1}>{item}</li>;
                })}
            </div>
        );
    }
}
