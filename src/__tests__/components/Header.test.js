import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './../../components/Header';

configure({ adapter: new Adapter() });

it('render correctly', () => {
  const snap = shallow(<Header />);

  expect(snap).toMatchSnapshot();
});
