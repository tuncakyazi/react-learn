import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from './../../components/Content';

configure({ adapter: new Adapter() });

it('render correctly', () => {
  const snap = shallow(
    <Content>
      <h1>Content</h1>
    </Content>
  );

  expect(snap).toMatchSnapshot();
});
