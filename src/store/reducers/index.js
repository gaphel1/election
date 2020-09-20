import {combineReducers} from 'redux'
import generalReducer from './general'
import course from './course'

const general = combineReducers({
    generalReducer,
    course
})

export default general;