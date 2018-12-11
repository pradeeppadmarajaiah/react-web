import postValue from '../data/post'
import { combineReducers } from 'redux'

let postReducer = (state = postValue, action) => {
    switch (action.type) {
        case 'REMOVE_POST':
            console.log("Reducer : " + action.index)
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST':
            console.log("Reducer : " + action.index);
            return [...state, action.post]
        case 'LOAD_POSTS':
            return action.posts
        default:
            return state

    }
}

let commentReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (!state[action.postId]) {
                return {
                    ...state, //Post Id
                    [action.postId]: [action.comment]
                }
            } else {
                return {
                    ...state, //Post Id
                    [action.postId]: [...state[action.postId], action.comment]
                }
            }
        case 'LOAD_COMMENTS':
            return  action.comments
        default:
            return state;
    }

}

//Reducer will have only a root reducer
const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer
}
)

export default rootReducer;