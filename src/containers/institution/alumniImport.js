import React, { Component } from 'react';
import './alumniImport.css';

class AlumniImport extends Component {
  componentWillMount() {
    //alert(this.props.institutionId);
  }

  renderStartImport() {
    return (
      <div className="alumni__import__wrapper">
        <div className="alumni__import__text">
          <span className="alumni__import__text--font">
            Start Alumni Import Job
          </span>
        </div>
        <div className="alumni__import__action">
          <div onClick={this.props.startImport} className="alumni__import__action--button">Run</div>
        </div>
      </div>
    )
  }

  renderInProgress() {
    return null;
  }

  render() {
    return (
      <div className="alumni__import__container">
        { this.props.importInProgress ? this.renderInProgress() : this.renderStartImport() }
      </div>
    );
  }
}

export default AlumniImport;
