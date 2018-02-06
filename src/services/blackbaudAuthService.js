import callApi from '../api/call';

const getBlackbaudAuthUrl = institutionId => {
  const args = {
    params: { institutionId }
  }

  return callApi('blackbaud/auth/url', 'get', args)
    .then(resp => resp.shift());
}

const postBlackbaudAuthCode = ({state, code}) => {
  const args = {
    body: {
      state, code
    }
  };

  return callApi('blackbaud/auth/code', 'post', args)
    .then(resp => resp.shift());
}

export {
  getBlackbaudAuthUrl,
  postBlackbaudAuthCode
}
