import React, { Component } from "react";
import PropTypes from "prop-types";
// Provider 是一个组件，接受一个store 属性，内部将其挂载在了context上

class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object
    };
    getChildContext() {
        return { store: this.props.store };
    }
    render(){
        return this.props.children
    }
}

let connect =(mapStateToProps,mapDispatchToProps)=>(Component)=>{
    return class Proxy extends Component{
        constructor(props,context){
            super(); // 默认情况下先调用mapStateToProps 返回结果{n:0}
            this.state= mapStateToProps(context.store.getState());
        }
        componentDidMount(){
            this.context.store.subscribe(()=>{
                this.setState(mapStateToProps(this.context.store.getState()));
            })
           
        }
        static contextTypes ={
            store:PropTypes.object
        }
        render(){
            return <Component 
            {...this.state}
            {...mapDispatchToProps(this.context.store.dispatch)}
            />
        }
    }
}

export {
    Provider,
    connect
}