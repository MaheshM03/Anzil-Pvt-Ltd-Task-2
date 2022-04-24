import {
	createStore,
	applyMiddleware,
	combineReducers,
  } from "redux";
  import thunk from "redux-thunk";
  import { composeWithDevTools } from "redux-devtools-extension";
import { getUserReducer, userReducer } from "./reducer/user-reducer";
  const initialState = {};
  const rootReducer = combineReducers({
	  user: userReducer,
    userData:getUserReducer
  });
  const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
  );
  export default store;
  