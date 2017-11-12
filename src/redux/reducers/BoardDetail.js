import board from "../../sudokuUtil/boards";

export const setBoard = (boardState={}, action) => {
    switch(action.type) {
        case 'SET_BOARD' :
            return board(action.level);
        default :
            return boardState
    }
}