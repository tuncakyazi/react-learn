import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'; // for asynchronous operation
import { createLogger } from 'redux-logger'; // for console control

import { routerMiddleware } from 'react-router-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules/index'; // call reducers

// Store configuration
const configureStore = (preloadedState, history) => {
  // server-side rendering control | preloadedState = undefined!
  // eslint-disable-next-line
  const middlewares = [ReduxThunk, routerMiddleware(history)];

  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'development') {
    // Just Development middlewares
    middlewares.push(createLogger());
  }

  // Store create
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./modules', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('./modules').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
