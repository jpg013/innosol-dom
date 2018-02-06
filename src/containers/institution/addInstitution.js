import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { createInstitution } from '../../services/institutionsService';
import './addInstitution.css';

class AddInstitution extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'editing',
      msg: ''
    };
  }

  setFormRef = el => this.formRef = el;

  saveInstitution = e => {
    if (!this.formRef || this.state.status === 'saving') {
      return;
    }

    const name = this.formRef.querySelector('#institution-name').value;
    const neo4jConnection = this.formRef.querySelector('#neo-connection').value;
    const neo4jAuth = this.formRef.querySelector('#neo-auth').value;
    const blackbaudClientId = this.formRef.querySelector('#blackbaud-client-id').value;
    const blackbaudClientSecret = this.formRef.querySelector('#blackbaud-client-secret').value;
    const blackbaudSubscriptionKey = this.formRef.querySelector('#blackbaud-subscription-key').value;

    if (!name || !neo4jConnection || !neo4jAuth || !blackbaudClientId ||
        !blackbaudClientSecret || !blackbaudSubscriptionKey) {
      return;
    }

    const data = {
      name,
      neo4jConnection,
      neo4jAuth,
      blackbaudClientId,
      blackbaudClientSecret,
      blackbaudSubscriptionKey
    };

    this.setState(() => ({status: 'saving'}));

    createInstitution(data)
      .then(resp => {
        this.setState(() => ({status: 'saved'}));
      });
  }

  render() {
    if (this.state.status === 'saved') {
      return ( <Redirect to={'/'} /> );
    }

    return (
      <div className="add__institution">
        <div className="add__institution__title">
          <h1>Add An Institution</h1>
        </div>

        <div className="add__institution__form" ref={this.setFormRef}>
          <div className="add__institution__form__field">
            <input className="add__institution__form__field__input" id="institution-name" type="text" placeholder="Institution Name" />
          </div>
          <div className="add__institution__form__field">
            <input className="add__institution__form__field__input"  id="neo-connection" type="text" placeholder="Neo4j Connection" />
          </div>
          <div className="add__institution__form__field">
            <input className="add__institution__form__field__input"  id="neo-auth" type="text" placeholder="Neo4j Auth" />
          </div>
          <div className="add__institution__form__field">
            <input className="add__institution__form__field__input"  id="blackbaud-client-secret" type="text" placeholder="Blackbaud Client Secret" />
          </div>
          <div className="add__institution__form__field">
            <input className="add__institution__form__field__input"  id="blackbaud-client-id" type="text" placeholder="Blackbaud Client Id" />
          </div>
          <div className="add__institution__form__field">
            <input className="add__institution__form__field__input"  id="blackbaud-subscription-key" type="text" placeholder="Blackbaud Subscription Key" />
          </div>
        </div>

        <div className="add__institution__form__field__button" onClick={this.saveInstitution}>Save</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddInstitution));
