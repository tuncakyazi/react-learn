import createHistory from 'history/createBrowserHistory';
import configureStore from './../../redux/configureStore';

it('create store successfuly', () => {
  const history = createHistory();
  const store = configureStore(undefined, history);

  expect(store).toHaveProperty('dispatch');
  expect(store).toHaveProperty('getState');
});
