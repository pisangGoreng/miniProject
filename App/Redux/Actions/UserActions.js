import * as ActionTypes from './Constants'

export const fetchingUserDataActions = () => {
  return {
    type: ActionTypes.FETCHING_USER_DATA,
    payload: {}
  }
}

export const fetchingUserDataSuccessActions = (data) => {
  return {
    type: ActionTypes.FETCHING_USER_DATA_SUCCESS,
    payload: data
  }
}

export const fetchingUserDataFailedActions = (error) => {
  return {
    type: ActionTypes.FETCHING_USER_DATA_FAILED,
    payload: error
  }
}