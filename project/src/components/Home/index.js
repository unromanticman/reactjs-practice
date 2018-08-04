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
              test
              </h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <h1>test</h1>
            </div>
            <div className="col-md-3">
              <div className="sidebar">
                <p>test</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
