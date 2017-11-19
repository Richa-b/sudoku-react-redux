import React from "react";
import {isSudokuComplete} from "../util/sudoku";

class Actions extends React.Component {

    render() {
        return (
            <div>
                {
                    isSudokuComplete(this.props.board) ? <p>Congratulations!!!</p> :
                        <p/>
                }
            </div>
        )
    }
}


export default Actions