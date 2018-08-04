import React from 'react';
import { Link } from 'react-router-dom';

const LinkView = props => {
  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
    </ul>
  );
};
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>
          <LinkView />
        </div>
      </nav>
    );
  }
}
export default Header;
