import React, { Component } from 'react';
import { postBlackbaudAuthCode } from '../services/blackbaudAuthService';

class blackbackAuthCallback extends Component {
  componentWillMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    if (code && state) {
      postBlackbaudAuthCode({code, state})
        .then(resp => {
          window.location = `${window.origin}`;
        })
    }
  }

  render() {
    return (<h2>Loading</h2>)
  }
}

export default blackbackAuthCallback;
