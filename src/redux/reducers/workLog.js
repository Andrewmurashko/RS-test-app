const initialState = {
  workLog: [],
  isLoaded: false,
  currentEmployeeId: null,
};

const workLogState = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WORK_LOG': {
      const workLogArr = action.payload.filter(
        (el, i) => el.employee_id === state.currentEmployeeId,
      );
      return {
        ...state,
        workLog: workLogArr,
        isLoaded: true,
      };
    }
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    case 'SET_CURRENT_EMPLOYEE_ID':
      return {
        ...state,
        currentEmployeeId: action.payload,
      };
    default:
      return state;
  }
};

export default workLogState;
