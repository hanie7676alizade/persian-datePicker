import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import commonReducer from "./Common/slice";

import commonSagaWatcher from "./Common/sagaWatcher";

const rootReducer = {
  Common: commonReducer,
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(commonSagaWatcher);

export default store;

export type TStore = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
