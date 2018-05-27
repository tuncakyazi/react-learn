import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './../../components/Footer';

configure({ adapter: new Adapter() });

it('render correctly', () => {
  const snap = shallow(<Footer />);

  expect(snap).toMatchSnapshot();
});
