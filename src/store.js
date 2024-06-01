import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customars/customarSlice";

const rootreducer = combineReducers({
  account: accountReducer,
  customar: customerReducer,
});

const store = createStore(rootreducer);

export default store;
