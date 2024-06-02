import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customarReducer from "./features/customars/customarSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customar: customarReducer,
  },
});

export default store;
