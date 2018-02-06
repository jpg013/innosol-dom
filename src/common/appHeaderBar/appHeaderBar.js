import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from  'react-redux';
import './appHeaderBar.css';

class AppHeaderBar extends Component {
  render() {
    return (
      <div className="app__header__bar">

      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.auth;
  return {
    user
  };
};

export default withRouter(connect(mapStateToProps)(AppHeaderBar));
