import React from 'react';
import { Link } from 'react-router-dom';

const LinkView = props => {
  return (
    <ul className="nav navbar-nav">
      <li >
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/testPage">
          TestPage
        </Link>
      </li>
      <li>
        <Link to="/formPage">
          表單防呆
        </Link>
      </li>
      <li>
        <Link to="/CustomComponentPage">
          可重複利用的component練習
        </Link>
      </li>
      <li>
        <Link to="/PromiseLearn">
          異步數據Promise處理
        </Link>
      </li>
      <li>
        <Link to="/SassScssPage">
          Sass與Scss整合
        </Link>
      </li>
      <li>
        <Link to="/TableTest">
          動態Table
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
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">WebSiteName</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <LinkView />
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
