import makeActionCreator from './makeActionCreator';

export const INSTITUTION_LIST_REQUEST = 'INSTITUTION_LIST_REQUEST';
export const INSTITUTION_LIST_RECEIVE = 'INSTITUTION_LIST_RECEIVE';
export const INSTITUTION_DETAILS_REQUEST = 'INSTITUTION_DETAILS_REQUEST';
export const INSTITUTION_DETAILS_RECEIVE = 'INSTITUTION_DETAILS_RECEIVE';
export const INSTITUTION_DETAILS_INIT = 'INSTITUTION_DETAILS_INIT';
export const INSTITUTION_START_ALUMNI_IMPORT_REQUEST = 'INSTITUTION_START_ALUMNI_IMPORT_REQUEST';
export const INSTITUTION_START_ALUMNI_IMPORT_RECEIVE = 'INSTITUTION_START_ALUMNI_IMPORT_RECEIVE';

export const requestList = makeActionCreator(INSTITUTION_LIST_REQUEST);
export const receiveList = makeActionCreator(INSTITUTION_LIST_RECEIVE, 'items');
export const requestDetails = makeActionCreator(INSTITUTION_DETAILS_REQUEST);
export const receiveDetails = makeActionCreator(INSTITUTION_DETAILS_RECEIVE, 'details', 'alumniImports');
export const initDetails = makeActionCreator(INSTITUTION_DETAILS_INIT, 'institutionId');
export const requestStartAlumniImport = makeActionCreator(INSTITUTION_START_ALUMNI_IMPORT_REQUEST, 'institutionId');
export const receiveStartAlumniImport = makeActionCreator(INSTITUTION_START_ALUMNI_IMPORT_RECEIVE, 'alumniImport');
