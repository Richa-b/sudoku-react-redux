import React, {Component} from "react";

class Game extends React.Component {

    render() {
        const {onLevelSelect, board} = this.props

        return (
            <div>
                <select onChange={(e) => onLevelSelect(e.target.value)}>
                    <option value={'EASY'}>Easy</option>
                    <option value={'MEDIUM'}>Medium</option>
                    <option value={'HARD'}>Difficult</option>
                </select>

            </div>
        )
    }
}


export default Game



