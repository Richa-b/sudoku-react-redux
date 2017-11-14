import board, {Board} from "../../sudokuUtil/boards";

export const setBoard = (boardState = new Board(), action) => {
    switch (action.type) {
        case 'SET_BOARD' :
            return board(action.level);
        default :
            return boardState
    }
}