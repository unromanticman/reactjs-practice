import agent from '../agent';
import Header from '../components/Header/Header';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Aside from '../components/Aside/Aside';
import { store } from '../store';
import { push } from 'react-router-redux';

import Home from '../components/Home/Home';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class Full extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <Aside />
            </div>
            <div class="col-md-9">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(Full);
