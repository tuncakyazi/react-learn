import configureStore from './../../redux/configureStore';

it('create store successfuly', () => {
  const store = configureStore(undefined);

  expect(store).toHaveProperty('dispatch');
  expect(store).toHaveProperty('getState');
});
