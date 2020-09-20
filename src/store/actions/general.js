import { SET_UI_GENERAL, SET_LANGUAGE } from './actionTypes'

const setUi =(content) =>{
    return{
        type:SET_UI_GENERAL,
        payload:{ content}
    }
}

const setLanguage = (lang) =>{
    return{
        type:SET_LANGUAGE,
        payload:{lang}
    }
}

export {setUi, setLanguage};