import { combineReducers } from 'redux'; // For multiple reducers
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  router: routerReducer
});
