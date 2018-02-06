import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import SignOut from '../signOut/signOut';
import AppHeaderBar from '../../common/appHeaderBar/appHeaderBar';
import AppSideBar from '../../common/appSideBar/appSideBar';
import InstitutionList from '../institution/institutionList';
import AddInstitution from '../institution/addInstitution';
import InstitutionDetails from '../institution/institution';
import BlackbaudAuthCallback from '../blackbaudAuthCallback';
import Board from '../../common/board/board';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeaderBar />
        <AppSideBar />
        <Board>
          <Switch>
            <Route path="/signout" component={SignOut} exact />
            <Route path="/" component={InstitutionList} exact />
            <Route path="/institutions/add" component={AddInstitution} exact />
            <Route path="/institutions/:id" component={InstitutionDetails} exact />
            <Route path="/blackbaud/auth/callback" component={BlackbaudAuthCallback} exact />
          </Switch>
        </Board>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default withRouter(connect(mapStateToProps)(App));
