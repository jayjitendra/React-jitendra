import { combineReducers } from 'redux' // npm i redux

import empReducer from "./empReducer.js";
import usersReducer from "./usersReducer.js";
import studentReducer from "./studentReducer.js";

var rootReducer = combineReducers({
    empReducer, usersReducer, studentReducer 
});

export default rootReducer;