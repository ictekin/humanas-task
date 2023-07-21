import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import loginReducer from "./slices/authSlice";
import userDetailReducer from "./slices/userDetailSlice";
import metaCvUsersSlice from "./slices/metaCvUsers";
import filterSlice from "./slices/filterSlice";

const combinedReducer = combineReducers({
  login: loginReducer,
  userDetail: userDetailReducer,
  metaCvUsers: metaCvUsersSlice,
  filters: filterSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = (state, action) => {
  if (action.type === "login/logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
