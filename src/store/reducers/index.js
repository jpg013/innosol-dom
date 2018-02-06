import { combineReducers } from 'redux';
import auth from './auth';
import institutionList from './institutionList';
import institutionDetails from './institutionDetails';

export const makeRootReducer = () => {
  return combineReducers({
    auth,
    institutionList,
    institutionDetails
  });
};
