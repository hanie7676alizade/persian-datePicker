import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import CommonReducer from "./Common/reducer";

import { watchCommon } from "./Common/sagaWatcher";

const appReducer = combineReducers({
    Common: CommonReducer,
});

const rootReducer = (state, action) => {
    if (action.type === "AUTH_LOGOUT") {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

const logger = (state) => {
    return (next) => {
        return (action) => {
            // console.log(action);
            next(action);
        };
    };
};

const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 25,
        })) ||
    compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);

// sagaMiddleware WatchSAGA
// sagaMiddleware.run(watchCommon);

export default store;