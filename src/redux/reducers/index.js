import { combineReducers } from 'redux';

import employeesState from './employees';
import workLogState from './workLog';

const rootReducer = combineReducers({
  employeesState,
  workLogState,
});
export default rootReducer;
