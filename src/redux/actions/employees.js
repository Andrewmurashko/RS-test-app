import { getEmployees } from '../../db/api';

export const setLoadedEmployees = (payload) => ({
  type: 'SET_LOADED_EMPLOYEES',
  payload,
});

export const fetchEmployees = () => (dispatch) => {
  dispatch(setLoadedEmployees(false));
  getEmployees().then((res) => dispatch(setEmployees(res)));
};

export const setEmployees = (items) => ({
  type: 'SET_EMPLOYEES',
  payload: items,
});
