import { getWorklog } from '../../db/api';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchWorkLog = () => (dispatch) => {
  dispatch(setLoaded(false));
  getWorklog().then((res) => dispatch(setWorkLog(res)));
};

export const setWorkLog = (items) => ({
  type: 'SET_WORK_LOG',
  payload: items,
});

export const setCurrentEmployeeId = (items) => ({
  type: 'SET_CURRENT_EMPLOYEE_ID',
  payload: items,
});
