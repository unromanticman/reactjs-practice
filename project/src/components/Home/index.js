import React from 'react';
import { connect } from 'react-redux';
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
});
class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">
              Project
            </h1>
          </div>
        </div>
        <div className="container page">
          <div className="row">
            <div className="col-md-3">
              <div className="sidebar">
                側邊欄
              </div>
            </div>
            <div className="col-md-9">
              主文
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
