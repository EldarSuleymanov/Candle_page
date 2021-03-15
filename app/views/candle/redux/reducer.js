const initialState = {
  data: {},
};

export const reducerForThunk = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_IN':
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
