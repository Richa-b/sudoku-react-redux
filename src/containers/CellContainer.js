import {changeCellValue} from "../redux/actions/index";
import Cell from "../components/Cell";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {onChangeCellValue: (cell) => dispatch(changeCellValue(cell))}
}

const CellContainer = connect(null, mapDispatchToProps)(Cell)

export default CellContainer