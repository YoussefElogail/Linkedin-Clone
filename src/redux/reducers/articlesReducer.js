import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  articles : []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.SET_LOADING_STATUS:
    return { ...state, loading : payload }
  
  case actionTypes.GET_ARTICLES:
    return{
      ...state,articles : payload
    }

  default:
    return state
  }
}
