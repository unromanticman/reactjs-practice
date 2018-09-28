import React from 'react';
import PropTypes from 'prop-types';

//利用prop-types限制元件屬性
const propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired, //未帶入會跳warning
  type: PropTypes.string,
  onClick: PropTypes.func
}

//元件預設屬性
const defaultProps = {
  type: 'button',
}

const Button = ({ type, name, onClick, children }) =>
  <button type={type} name={name} onClick={onClick}>
    {children}
  </button>

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
