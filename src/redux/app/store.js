import { createStore,applyMiddleware } from "redux";
import { rootReducer } from "./index";
import reduxThunk from 'redux-thunk';

export const store = createStore(rootReducer,applyMiddleware(reduxThunk))
