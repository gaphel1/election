import {SET_SPECIFIC_COURSE, GET_ALL_COURSE_OF_CATEGORY, SET_SELECTED_CATEGORY} from '../actions/actionTypes'
import buddha from '../../static/buddha.jpeg'


let allCourse={
    tibetan :[
      {courseName:'class1', class:'1', description:{title:'Class 1 Tibetan Language', detail:'this is good course',img:buddha} , 
        courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                    {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'},
                    {title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                    {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                  ]
          },
      {courseName:'class12', class:'2', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
        courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                    {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                  ]
          },
      {courseName:'class2', class:'3', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
      courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                  {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                ]
        },
      {courseName:'class3', class:'4', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
      courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                  {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                ]
        },
      {courseName:'class4', class:'5', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
      courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                  {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                ]
        }
    ],
    english :[
      {courseName:'class1', class:'1', description:{title:'Class 1 English Language', detail:'this is good course'} , 
        courseList:[{title:'year is good',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                    {title:'thisitlet is very good ',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                  ]
          },
      {courseName:'class12', class:'1', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
        courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                    {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                  ]
          },
      {courseName:'class2', class:'1', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
      courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                  {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                ]
        },
      {courseName:'class3', class:'1', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
      courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                  {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                ]
        },
      {courseName:'class4', class:'1', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
      courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                  {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                ]
        } 
    ],
    buddhism:[
      {courseName:'class1', class:'1', description:{title:'Class 1 Buddhism Language', detail:'this is good course',img:buddha} , 
        courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'https://youtu.be/aXubrSdDXiY'},
                    {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'https://www.youtube.com/watch?v=LxxvJ0VMoSE&feature=youtu.be'}
                  ]
          },
      {courseName:'class12', class:'1', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
        courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                    {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                  ]
          },
      {courseName:'class2', class:'1', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
      courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                  {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                ]
        },
      {courseName:'class3', class:'1', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
      courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                  {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                ]
        },
      {courseName:'class4', class:'1', description:{title:'Class 1 Tibetan Language', detail:'this is good course'} , 
      courseList:[{title:'hello',description:'hasdfasdfsadfsadfasdf', link:'sdfasdfsadfasdf'},
                  {title:'hello1',description:'hasdfasdfsadfsadfasdf   sdfasfasdfsad', link:'sdfasdfsadfasdf'}
                ]
        } 
    ]    
}
const initialState = {
    specificCourse: {},
    content: false,
    category:'tibetan',
    allCategory:['tibetan','english','buddhism'],
    currentCategoryCourse:allCourse['tibetan'],
  };

export default function visibilityFilter(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_COURSE_OF_CATEGORY:
        return {
            ...state,
            currentCourse:state[state.category]
        }
      case SET_SPECIFIC_COURSE:
        console.log(state.currentCategoryCourse[action.payload.index],action.payload.index)
        return{
            ...state,
            specificCourse: state.currentCategoryCourse[action.payload.index]
        }
      case SET_SELECTED_CATEGORY:
        console.log(action.payload.category,allCourse[action.payload.category])
        return{
            ...state,
            category: action.payload.category,
            currentCategoryCourse:allCourse[action.payload.category]
        }
      default:
        return state
    }
  }