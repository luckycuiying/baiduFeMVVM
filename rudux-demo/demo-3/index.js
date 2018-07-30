
// rudex 流程
// 1, 定义当前项目有那些功能(常量)

 const INCREMENT = 'INCREMENT';
 const DECREMENT = 'DECREMENT';

 // 2, 定义当前项目的默认状态，把默认状态放到reducer 中
 // 
  function reducer(state={number:0},action) {
    switch(action.type){
        case INCREMENT:
        return{number:state.number+action.amount}
        break;
        case DECREMENT:
        return{ number: state.number-action.amount}
        break;
      
    }
    return state
  }

//3, 创建store
    
    let store = createStore(reducer);
//
//4， 默认渲染一次
function render(){
   let text =  document.querySelector('#text')
   text.innerHTML = store.getSate().number
}
render() // 初始化默认值

// 5, 订阅状态

 store.subscribe(render); // 当状态变化是触发render

add.addEventListener('click',function(){
    store.dispatch({
        type:INCREMENT,
        amount:3
    })
},false)

minus.addEventListener('click',function(){
    store.dispatch({
        type:DECREMENT,
        amount:2
    })
},false)

