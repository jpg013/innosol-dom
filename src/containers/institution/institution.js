import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initDetails, requestStartAlumniImport } from '../../store/actions/institution';
import BlackbaudAuth from './blackbaudAuth';
import AlumniImport from './alumniImport';
import './institution.css';

class Institution extends Component {
  componentWillMount() {
    this.props.init(this.props.match.params.id)
  }

  startImport = () => {
    this.props.startAlumniImport(this.props.id);
  }

  renderContent() {
    if (this.props.status !== 'received' || !this.props.details) {
      return;
    }

    if (!this.props.details.blackBaudCredentials.ticket) {
      return ( <BlackbaudAuth institutionId={this.props.id} /> );
    }

    if (!this.props.hasCompletedAlumniImportJob) {
      const alumniImportJobInProgress = this.props.details.alumniImportJobs.find(cur => cur.status === 'inProgress');
      return ( <AlumniImport
        institutionId={this.props.id}
        jobInProgress={alumniImportJobInProgress}
        startImport={this.startImport} /> );
    }

  }

  render() {
    return (
      <div className="institution__container">
        { this.renderContent() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { status, details, id } = state.institutionDetails;

  const hasCompletedAlumniImportJob = details && details.alumniImportJobs.find(cur => cur.status === 'completed' );

  return {
    status,
    details,
    id,
    hasCompletedAlumniImportJob
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: id => dispatch(initDetails(id)),
    startAlumniImport: id => dispatch(requestStartAlumniImport(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Institution);
