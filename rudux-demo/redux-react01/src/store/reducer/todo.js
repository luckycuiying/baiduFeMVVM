
import * as types from '../action-types'
function todo(state=[],action) {
    swicth(action.types){
        case types.ADDTODO:
        return [..state,action.content]
    }
    return state;
}

export default todo