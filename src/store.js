import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customars/customarSlice";
import { composeWithDevTools } from "redux-devtools-extension";

const rootreducer = combineReducers({
  account: accountReducer,
  customar: customerReducer,
});

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
