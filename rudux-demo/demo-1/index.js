// 统一状态管理， 不能直接更改状态 必须通过dispatch 方法来修改
// 
 // 宏 常量
const CHANGE_TITLE_TEXT = 'CHANGE_TITLE_TEXT ';
const CHANGE_TITLE_COLOR='CHANGE_TITLE_COLOR'

// 讲状态放在一个盒子里面，别人不能修改
// 
function createStore(reducer){
    let state ;
    //派发 参数是action 动作， 规定action是一个对象这个对象必须有一个type属性{type:'自定义'}
    //除了type 参数后其他所有参数统称 payload 载荷
    function dispatch(action,payload){ // 
       state = reducer(state=initState,action) // 调用写好的方法，这个方法会返回一个新的状态
    }
    dispatch({})
    let getState = () =>JSON.parse(JSON.stringify(state))
    return {
        getState,
        dispatch
    }
}
let initState = {
        titleState:{
            color:'red',
            text:'标题'
        },
        contextState:{
            color:'green',
            text:'内容区'
        }
    }
let store = createStore(reducer);
function reducer(state,action){ // 管理员，负责如何更改状态的
    switch(action.type){ // 更改状态，要一个新的状态覆盖掉
        case CHANGE_TITLE_TEXT:
        state={...state,titleState:{...state.titleState,text:action.text}};
        break;
        case CHANGE_TITLE_COLOR:
        state = {...state,contextState:{...state.contextState,color:action.color}};
        break;
    }
    return state
}
setTimeout(()=>{
    store.dispatch({
        type:CHANGE_TITLE_TEXT, 
        text:'长标题'
    })
    store.dispatch({
        type:CHANGE_TITLE_COLOR,
        color:'blue'
    })
    renderApp()
},3000)

renderApp()
function renderApp() {
    renderTitle()
    renderContent()
}
function renderTitle(){
    let title = document.querySelector('.title');
    title.innerHTML = store.getState().titleState.text;
    title.style.color = store.getState().titleState.color;
}
function renderContent(){
    let content = document.querySelector('.content');
    content.innerHTML =store.getState().contextState.text;
    content.style.color =store.getState().contextState.color;
}