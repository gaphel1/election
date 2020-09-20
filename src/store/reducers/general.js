import {SET_UI_GENERAL, SET_LANGUAGE} from '../actions/actionTypes'

const initialState = {
    allIds: [],
    byIds: {},
    content: false,
    current_language: 'en'
  };

export default function visibilityFilter(state = initialState, action) {
    switch (action.type) {
      case SET_UI_GENERAL:
        console.log(action.payload)
        return {
            ...state,
            content: action.payload.content
        }
      case SET_LANGUAGE:
        console.log(action.payload)
        return {
            ...state,
            current_language: action.payload.lang
        }
      default:
        return state
    }
  }