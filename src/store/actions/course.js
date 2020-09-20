import { SET_UI_GENERAL, SET_SELECTED_CATEGORY, GET_ALL_COURSE_OF_CATEGORY, SET_SPECIFIC_COURSE } from './actionTypes'

const setSelectedCategory = (category) =>{
    return{
        type:SET_SELECTED_CATEGORY,
        payload:{category}
    }
}

const getAllCourse = () =>{
    return{
        type:GET_ALL_COURSE_OF_CATEGORY,
    }
}

const setSpecificCourse = (index) =>{
    console.log(index)
    return{
        type:SET_SPECIFIC_COURSE,
        payload: {index}
    }
}
export { getAllCourse, setSelectedCategory, setSpecificCourse};