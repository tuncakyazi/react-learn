import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './../../routes/Home';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const snap = shallow(<Home />);

  expect(snap).toMatchSnapshot();
});
