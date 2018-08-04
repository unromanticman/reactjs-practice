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
      <div>
        首頁
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
