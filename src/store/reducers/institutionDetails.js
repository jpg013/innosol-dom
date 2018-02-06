import initialState from '../initialState';
import {
  INSTITUTION_DETAILS_REQUEST,
  INSTITUTION_DETAILS_RECEIVE,
  INSTITUTION_DETAILS_INIT
} from '../actions/institution';

const defaultState = Object.assign({}, initialState.institutionDetails);

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case INSTITUTION_DETAILS_INIT:
      return {
        ...state,
        id: action.institutionId
      }
    case INSTITUTION_DETAILS_REQUEST:
      return {
        ...state,
        status: 'requesting'
      };
    case INSTITUTION_DETAILS_RECEIVE:
      return {
        ...state,
        status: 'received',
        details: action.details,
        alumniImports: action.alumniImports
      };
    default:
      return state;
  }
}
