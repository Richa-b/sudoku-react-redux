import React, {Component} from "react";
import {Table} from "react-bootstrap";
import Cell from "../containers/CellContainer";
import Actions from "./Actions";

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
                <Actions board={board}/>
            </div>
        )
    }
}


export default Game



