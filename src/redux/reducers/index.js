import {boardDetails} from "./BoardDetail";

const combineReducers = (currentState, action) => {

    let nextState = Object.assign({}, currentState);
    nextState = {
        board: boardDetails(nextState.board, action)
    }

    return nextState;
}

export default combineReducers
