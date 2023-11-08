import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return { ...state, user: payload }; 

    default:
      return state;
  }
};


