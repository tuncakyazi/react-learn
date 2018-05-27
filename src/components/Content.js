import React from 'react';
import PropTypes from 'prop-types';

const Content = props => <div>{props.children}</div>;
/* eslint-disable */
Content.propTypes = {
  children: PropTypes.node.isRequired
};
/* eslint-enable */
export default Content;
