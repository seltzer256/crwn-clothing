/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import {
    persistStore,
    //persistReducer
} from "redux-persist";

const middlewares = [logger];

export const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
    //composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
export default { store, persistor };
