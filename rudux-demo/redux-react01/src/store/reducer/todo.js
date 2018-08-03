
import * as types from '../action-types'
function todo(state=[],action) {
    swicth(action.type){
        case types.ADDTODO:
        return [..state,action.text]
    }
    return state;
}

export default todo