import React from 'react';
import { connect } from 'react-redux';
import { LOGOUT, LOGIN } from './../../constants/actionTypes';
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  login: token =>
    dispatch({ type: LOGIN, payload: { reducer: 'auth', user: { token: token } } }),
  logout: () =>
    dispatch({ type: LOGOUT, payload: { reducer: 'auth' } }),
});

class Loginout extends React.Component {
 
  render() {
  
    return (
      <div>
        <div>
          登入登出測試
        </div>
        <div>
          <div>{localStorage.getItem('jwt') !== '' ? '已登入:' + localStorage.getItem('jwt') : '未登入'}</div>
          <button onClick={this.props.login.bind(this, '12345')}>登入</button>
          <button onClick={this.props.logout}>登出</button>
        </div >
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loginout);
