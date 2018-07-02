import { combineReducers } from 'redux'
import UserReducer from './UserReducer'

const rootReducers = combineReducers({
    UserReducer: UserReducer
})

export default rootReducers
