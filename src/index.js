import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';

import './index.css';
import App from './components/App';

const store = configureStore(undefined); // preloadedState = undefined!

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    // eslint-disable-next-line
    document.getElementById('root')
  );
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}

render(App);
