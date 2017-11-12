import {setBoard} from "./BoardDetail";

const combineReducers = (currentState, action) => {

    let nextState = Object.assign({}, currentState);
    nextState = {
        board: setBoard(nextState.board, action)
    }

    return nextState;
}

export default combineReducers
