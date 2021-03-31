const initialState = {
  employees: [],
  isLoaded: false,
};

const employees = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES': {
      const employeesArr = action.payload;
      const birthReverse = employeesArr.length
        ? employeesArr.map((el) => el.birthDate.split('-').reverse().join('-'))
        : null;
      employeesArr.map((el, i) => (el.birthDate = birthReverse[i]));

      return {
        ...state,
        employees: employeesArr,
        isLoaded: true,
      };
    }
    case 'SET_LOADED_EMPLOYEES':
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default employees;
