import React, {Component} from 'react';

class Cell extends Component {

    render() {
        let {cell, onChangeCellValue} = this.props;
        let classes = []
        cell.isEditable ? classes.push('editable') : classes.push('non-editable')
        cell.hasConflict ? classes.push('has-conflict') : classes.push('')

        console.log(cell.hasConflict)
        classes.push('ci' + cell.columnIndex)
        classes.push('ri' + cell.rowIndex)

        return (
            <td key={cell.columnIndex} className={classes.join(' ')}>
                <input type='text' onChange={(e) => {
                    cell.value = e.target.value
                    return onChangeCellValue(cell)
                }
                } readOnly={!cell.isEditable} defaultValue={cell.value}/>
            </td>)
    }
}


export default Cell