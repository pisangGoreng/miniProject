// import Action Redux
import {
  fetchingUserDataActions,
  fetchingUserDataSuccessActions,
  fetchingUserDataFailedActions
} from '../Actions'

async function fetchLogin () {
  let response = await fetch(`https://asia-northeast1-miniserver-208702.cloudfunctions.net/api`, {
    method: 'GET',
  })
  let data = await response.json()
  return data
}

export const requestUserDataThunk = () => {
  return dispatch => {
    dispatch(fetchingUserDataActions())
    // FETCH FROM API
    fetchLogin()
    .then(data => dispatch(fetchingUserDataSuccessActions(data)))
    .catch((err) => dispatch(fetchingUserDataFailedActions(data)))   
  }
}