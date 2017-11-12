import {getBoard} from "../redux/actions/index";
import Game from "../components/Game";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        onLevelSelect: (level) => dispatch(getBoard(level))
    }
}

const mapStateToProps = (state) => {
    return {board: state.board}
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)
export default GameContainer