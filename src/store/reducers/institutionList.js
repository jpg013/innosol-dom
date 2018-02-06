import initialState from '../initialState';
import {
  INSTITUTION_LIST_REQUEST,
  INSTITUTION_LIST_RECEIVE
} from '../actions/institution';

const defaultState = Object.assign({}, initialState.institutionList);

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case INSTITUTION_LIST_REQUEST:
      return {
        ...state,
        status: 'requesting'
      }
    case INSTITUTION_LIST_RECEIVE:
      debugger;
      return {
        ...state,
        collection: state.collection.concat(action.items),
        status: 'received'
      }
    default:
      return state;
  }
}
