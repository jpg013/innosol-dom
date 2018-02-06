import React, { Component } from 'react';
import { connect } from  'react-redux';
import './appSideBar.css';

class AppSideBar extends Component {
  render() {
    return (
      <div className="app__side__bar">

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { };
};

export default connect(mapStateToProps)(AppSideBar);
