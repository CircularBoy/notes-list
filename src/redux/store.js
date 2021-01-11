import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import thunk from "redux-thunk";

let reducers = combineReducers({
    // profilePage: profileReducer,
    form: formReducer
})
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevTools) )

export default store;