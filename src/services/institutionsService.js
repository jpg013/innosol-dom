import callApi from '../api/call';

function createInstitution(data) {
  const params = {
    body: {
      ...data
    }
  };

  return callApi('institutions', 'post', params)
    .then(resp => {});
}

function getInstitutions() {
  return callApi('institutions', 'get')
    .then(resp => resp.shift());
}

function getInstitutionDetails(id) {
  const args = {
    params: { id }
  };

  return callApi('institutions/details', 'get', args)
    .then(resp => resp.shift());
}

function getAlumniImports(id) {
  const args = {
    params: { id }
  };

  return callApi('alumniimports', 'get', args)
    .then(resp => resp.shift());
}

function createAlumniImport(institutionId) {
  const params = {
    body: { institutionId }
  };

  return callApi('alumniimportjobs', 'post', params)
    .then(resp => resp.shift());
}

export {
  createInstitution,
  getInstitutions,
  getInstitutionDetails,
  getAlumniImports,
  createAlumniImport
};
