import * as ActionTypes from '../Actions/Constants'

let initState = {
  dataUser: [],
  isFetching: false,
  error: null,
}

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCHING_USER_DATA: {
      return {...state, isFetching: true, error: null}
    }

    case ActionTypes.FETCHING_USER_DATA_SUCCESS: {
      return {...state, dataUser: action.payload, isFetching: false, error: null}
    }

    case ActionTypes.FETCHING_USER_DATA_FAILED: {
      console.tron.log(['masuk ke reducer ni', action.payload])
      return {...state, isFetching: false, error: action.payload}
    }

    default: {
      return state
    }
  }
}

export default UserReducer