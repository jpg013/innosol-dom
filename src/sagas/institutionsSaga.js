import { takeLatest, put, call, all, select, takeEvery } from 'redux-saga/effects'
import {
  INSTITUTION_LIST_REQUEST,
  INSTITUTION_DETAILS_INIT,
  receiveList,
  receiveDetails,
  requestDetails,
  INSTITUTION_START_ALUMNI_IMPORT_REQUEST,
  receiveStartAlumniImport
} from '../store/actions/institution';
import {
  getInstitutions,
  getInstitutionDetails,
  createAlumniImport
} from '../services/institutionsService';

function *requestInstitutionList(action) {
  const { institutions } = yield call(getInstitutions);
  yield put(receiveList(institutions));
}

function *institutionListFlow() {
  yield takeLatest(INSTITUTION_LIST_REQUEST, requestInstitutionList);
}

function *initInstitutionDetails(action) {
  const state = yield select();
  const { id } = state.institutionDetails;

  if (id) {
    yield put(requestDetails());
    const { institutionDetails, alumniImports } = yield call(getInstitutionDetails, id);
    yield put(receiveDetails(institutionDetails, alumniImports));
  }
}

function *institutionDetailsFlow() {
  yield takeLatest(INSTITUTION_DETAILS_INIT, initInstitutionDetails);
}

function *startAlumniImportRequest(action) {
  const resp = yield call(createAlumniImport, action.institutionId);
  debugger;
}

function *alumniImportFlow() {
  yield takeEvery(INSTITUTION_START_ALUMNI_IMPORT_REQUEST, startAlumniImportRequest);
}

function *institutionsSaga() {
  yield all([institutionListFlow(), institutionDetailsFlow(), alumniImportFlow()]);
}

export default institutionsSaga;
