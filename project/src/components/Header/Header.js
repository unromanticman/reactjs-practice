import React from 'react';
import { Link } from 'react-router-dom';

const LinkView = props => {
  return (
    <ul class="nav navbar-nav">
      <li class="active">
        <Link to="/">
          Home
        </Link>
      </li>
    </ul>
  );
};
class Header extends React.Component {
  handleClick = () => {
    console.log('Click happened');
  }
  render() {
    return (

      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">WebSiteName</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <LinkView />
          </div>
        </div>
      </nav>

    );
  }
}
export default Header;
