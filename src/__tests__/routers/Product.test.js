import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Product from './../../routes/Product';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const snap = shallow(<Product />);

  expect(snap).toMatchSnapshot();
});
