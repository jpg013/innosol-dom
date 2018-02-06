import React from 'react';
import { getBlackbaudAuthUrl } from '../../services/blackbaudAuthService';
import './blackbaudAuth.css';

const blackbaudAuth = ({institutionId}) => {
  const authenticate = () => {
    getBlackbaudAuthUrl(institutionId)
      .then(resp => {
        debugger
        if (resp && resp.authUrl) {
          window.location = resp.authUrl;
        }
      })
  }


return (
    <div className="blackbaud__auth__container">
      <div className="blackbaud__auth__wrapper">
        <div className="blackbaud__auth__text">
          <span className="blackbaud__auth__text--font">
            Connect to the Blackbaud API
          </span>
        </div>
        <div className="blackbaud__auth__action">
          <div onClick={authenticate} className="blackbaud__auth__action--button">Authorize</div>
        </div>
      </div>
    </div>
  )
}

export default blackbaudAuth;
