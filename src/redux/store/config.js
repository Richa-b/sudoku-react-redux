import {compose, createStore} from "redux";
import combineReducers from "../reducers/index";

const store = createStore(combineReducers, {}, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store