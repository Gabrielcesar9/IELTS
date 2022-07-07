import { combineReducers } from "redux";
import listeningReducer from "./listening";
import writingReducer from "./writing";
import readingReducer from "./reading";

const allReducers = combineReducers({
    Listening:listeningReducer,
    Reading:readingReducer,
    Writing:writingReducer
})

export default allReducers
