import React, {Component} from 'react';

class Cell extends Component {

    constructor() {
        super();
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e) {
        e.preventDefault()
        let {cell, onChangeCellValue} = this.props;
        let value = e.target.value

        if (cell.isEditable && (value === '' || /^[1-9]$/.test(value))) {
            cell.value = value
            onChangeCellValue(cell)
        }
    }

    render() {
        let {cell, onChangeCellValue} = this.props;
        let classes = []
        cell.isEditable ? classes.push('editable') : classes.push('non-editable')
        cell.hasConflict ? classes.push('has-conflict') : classes.push('')

        classes.push('ci' + cell.columnIndex)
        classes.push('ri' + cell.rowIndex)

        return (
            <td key={cell.columnIndex} className={classes.join(' ')}>
                <input type='text' onChange={this.onInputChange}
                       readOnly={!cell.isEditable} value={cell.value}/>
            </td>)
    }
}


export default Cell