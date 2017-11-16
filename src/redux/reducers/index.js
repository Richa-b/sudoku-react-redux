import {boardDetails} from "./BoardDetail";
import cloneDeep from 'lodash.clonedeep'

const combineReducers = (currentState={}, action) => {

    let nextState = cloneDeep(currentState);
    nextState = {
        board: boardDetails(nextState.board, action)
    }

    return nextState;
}

export default combineReducers
