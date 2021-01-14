import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import notesReducer from "./notes/notes-reducer";

let reducers = combineReducers({
  notes: notesReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevTools))

export default store;