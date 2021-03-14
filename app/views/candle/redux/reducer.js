const initialState = {
  data: {},
  now:'march 13 2021 14:13:00'
};

export const reducerForThunk = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_IN':
      return {
        ...state,
        data: action.payload,
      };
    case 'SAVING_TIME':
      return {
        ...state,
        now: action.payload,
      };
    default:
      return state;
  }
};
