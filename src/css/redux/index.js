import {createStore, combineReducers,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import products from "./reducers/productReducer"
import thunk from "redux-thunk";

const initialState = {}

const rootReducer = combineReducers({
    products
})

export const store = createStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(thunk)))