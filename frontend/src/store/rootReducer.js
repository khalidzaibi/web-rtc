import { combineReducers } from 'redux'

import userSlice from './slices/userManagement/userSlice'
import alertSlice from './slices/alertNotification/alertSlice'
const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
       
        userSlice,
        alertSlice,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}

export default rootReducer
