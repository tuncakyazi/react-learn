import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './../components/App';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const snap = shallow(<App />);

  expect(snap).toMatchSnapshot();
});
