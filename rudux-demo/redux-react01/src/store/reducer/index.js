import counter from './counter'
import todo from './todo'
import { combineReducer }  from 'redux'

let reducers = combineReducer({
    counter,
    todo
})

export default reducers