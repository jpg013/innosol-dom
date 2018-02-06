import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { requestList } from '../../store/actions/institution';
import InstitutionCard from '../../components/institutionCard/institutionCard';
import './institutionList.css';

class institutionList extends Component {
  componentWillMount() {
    this.props.fetch();
  }

  makeCard = institutionModel => {
    return ( <InstitutionCard institutionModel={institutionModel} key={institutionModel.id} /> );
  }

  makeInstitutionCards() {
    return this.props.collection.map(this.makeCard);
  }

  render() {
    return (
      <div className="institutions__list">
        <div className="institutions__list__header">
          <span className="institutions__list__header__title">Institutions</span>
          <Link className="institutions__list__header__add" to="/institutions/add">Add Institution</Link>
        </div>
        <div className="institutions__list__items">
          {this.makeInstitutionCards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { status, collection } = state.institutionList;

  return {
    status,
    collection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(requestList())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(institutionList));
