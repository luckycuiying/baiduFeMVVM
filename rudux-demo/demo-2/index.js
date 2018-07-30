const CHANGE_TITLE = 'CHANGE_TITLE';

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

function reducer(state={title:'标题'},action){
    switch(action.type){
        case CHANGE_TITLE:
        return {...state,title:action.content}
    }
    return state;
}

let store = createStore(reducer)


function render(){
    document.querySelector('.title').innerHTML = store.getSate().title
}
render()

setTimeout(()=>{
    store.dispatch({
        type:CHANGE_TITLE,
        content:'常常标题'
    })
    unSubscribe()
},1000)

store.subscribe(render)
let unSubscribe = store.subscribe(()=>{
    alert(1)
})

setTimeout(()=>{
    store.dispatch({
        type:CHANGE_TITLE,
        content:'珠穆拉玛峰'
    })
},2000)
setTimeout(()=>{
    store.dispatch({
        type:CHANGE_TITLE,
        content:'阿尔卑斯山'
    })
},3000)