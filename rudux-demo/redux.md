### redux 的特点
1.  ** 统一 ** 的状态管理。
2.  不能直接更改状态

### redux 的大致流程
- 1. createStore 创建容器用来存放状态的
- 2. createStore 中有一个state 属性，不能直接访问状态
- 3. 在组件中想要获取这个状态可以通过产生的容器中的getStage 方法来获取
- 4. createState中的subscribe 目的是用来订阅事件的(当用户派发新的动作时会将订阅的函数进行执行)
- 5. 派发函数dispatch, 提供派发动作的方法，在内部会调用reducer,通过reducer触发状态的更新。
- 6. 派发函数dispatch 里面的参数 action 动作， 动作有一个type属性用来描述触发新功能的类型



### redux解决问题
解决跨组件