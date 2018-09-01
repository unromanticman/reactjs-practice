import Header from '../components/Header/Header';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Aside from '../components/Aside/Aside';
import { store } from '../store';
import { push } from 'react-router-redux';

import Home from '../components/Home/Home';
import TestPage from '../components/TestPage/TestPage';
import FormPage from '../components/TestPage/FormPage';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
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
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Aside />
            </div>
            <div className="col-md-9">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/testPage" component={TestPage} />
                <Route path="/formPage" component={FormPage} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Full);
