import { getEmployees } from '../../db/api';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchEmployees = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  getEmployees().then((res) => dispatch(setEmployees(res)));
};

export const setEmployees = (items) => ({
  type: 'SET_EMPLOYEES',
  payload: items,
});
