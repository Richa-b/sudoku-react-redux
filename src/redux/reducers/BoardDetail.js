import board, {Board, validateBoard} from "../../util/sudoku";

export const boardDetails = (boardState = new Board(), action) => {
    switch (action.type) {
        case 'SET_BOARD' :
            return board(action.level);
        case 'CHANGE_CELL_VALUE' :
            return updateCellStateInBoard(boardState, action.cell)
        default :
            return boardState
    }
}


const updateCellStateInBoard = (boardState, currentCell) => {

    let found = false
    for (let row in boardState.rows) {
        for (let cell in row.cells) {
            if (cell.columnIndex === currentCell.columnIndex &&
                cell.rowIndex === currentCell.rowIndex && cell.isEditable) {
                cell.value = currentCell.value
                found = true
                break
            }
            if (found === true) {
                break
            }
        }

    }
    validateBoard(boardState)
    return boardState

}


