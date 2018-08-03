function createStore(r) {
    let state; // 默认是undefined
    // 组件获取值
    let getState = ()=>{
        // 克隆一个state 的值
        return JSON.parse(JSON.stringify(state));
    }
    // 订阅状态放生变化时需要触发的函数
    let listeners = []
    let subscribe= (fn)=>{
            listeners.push(fn);
            return ()=>{
                // 调第二次的时候可以把函数移除掉
                listeners = listeners.filter(item => item!==fn)
            }
    }
    // 用来组件派发动作的
    let dispatch=(action )=> {
        state = r(state,action); // reducer 是跟据老状态和派发的动作返回一个新的状态，覆盖掉老的状态
        listeners.forEach(item => item()); //状态变化时，重新执行订阅的事假
    }
    dispatch({})// 初始化redux的默认值
    // combineReducers  返回的是一个新函数(合并后的)
    return {getState, subscribe, dispatch,combineReducers }
}
let combineReducers = (reducers)=>{
    return (state={},action) =>{
        let obj={};
        for(let key in reducers){
            obj[key] = reducers[key](state[key],action)
        }
        return obj
    }
}
export { createStore,combineReducers }
// module.exports = createStore;