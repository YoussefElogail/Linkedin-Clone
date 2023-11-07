import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
};

export default (state = initialState, { type, user }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return { ...state, user }; 

    default:
      return state;
  }
};


