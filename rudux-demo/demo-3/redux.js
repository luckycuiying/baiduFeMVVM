
function createStore(reducer) {
    let state ; //默认值是undefiend
    function dispatch(action){
        state = reducer(state,action);
        listeners.forEach(item=>item());
    }
    let listeners = [];
    let subscribe = (fn)=>{
        listeners.push(fn);
        return()=>{
            listeners = listeners.filter((item)=>item!==fn);
        }
    }
    dispatch({});// 用户的状态覆盖掉自身的状态
    let getSate = ()=> JSON.parse(JSON.stringify(state));
    return{
        dispatch,
        getSate,
        subscribe
    }
}
