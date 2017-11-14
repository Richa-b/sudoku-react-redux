export const getBoard = (level) => {
    return {type: 'SET_BOARD', level : level}
}

export const changeCellValue = (cell) => {
    return {type: 'CHANGE_CELL_VALUE', cell : cell}
}