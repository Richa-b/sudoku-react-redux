import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {chunks} from "../sudokuUtil/boards";

class Game extends Component {

    render() {
        const {onLevelSelect, board} = this.props

        return (
            <div>
                <select onChange={(e) => onLevelSelect(e.target.value)}>
                    <option value={'EASY'}>Easy</option>
                    <option value={'MEDIUM'}>Medium</option>
                    <option value={'HARD'}>Difficult</option>
                </select>
                {
                    <Table className='sudoku-table'>
                        <tbody>
                        {
                            board.rows.map((line, index) => {
                                return (
                                    <tr key={index}>
                                        {line.cells.map((cell, index) => {
                                            return <Cell cell={cell} key={index}/>
                                        })}
                                    </tr>)
                            })}
                        </tbody>
                    </Table>
                }
            </div>
        )
    }
}

class Cell extends Component {
    render() {
        let {cell} = this.props
        let classes = []
        cell.isEditable ? classes.push('editable') : classes.push('non-editable')
        cell.hasConflict ? classes.push('has-conflict') : classes.push('')
        classes.push('ci' + cell.columnIndex)
        classes.push('ri' + cell.rowIndex)

        return (
            <td key={cell.columnIndex} className={classes.join(' ')}>
                <input type='text' readOnly={!cell.isEditable} value={cell.value}/>
            </td>)
    }
}

export default Game



