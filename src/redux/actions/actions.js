import * as actionTypes from "./actionTypes"
export const setUser = (payload) => {
  return{
    type: actionTypes.SET_USER ,
    payload
  }
}

export const setLoading = (payload) => {
  return{
    type : actionTypes.SET_LOADING_STATUS,
    payload
  }
}

export const getArticles = (payload) => {
  return{
    type: actionTypes.GET_ARTICLES,
    payload
  }
}