import callApi from '../api/call';

function authenticateUser(username, password) {
  const params = {
    body: { username, password }
  };

  return callApi('authentication', 'post', params);
}

function getAuthenticatedUser() {
  return callApi('authentication/user', 'get')
    .catch(error => ({error}));
}

export {
  authenticateUser,
  getAuthenticatedUser
};
