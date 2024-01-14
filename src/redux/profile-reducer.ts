import {ActionsTypes} from './redux-store';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ProfilePageType = {
  posts: PostType[]
  newPostText: string
}

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11}
  ],
  newPostText:
    'Please, enter text',
}
const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts,
          {
            id: state.posts.length + 1,
            message: state.newPostText,
            likesCount: 0
          }
        ]
      }
    case UPDATE_NEW_POST_TEXT:
      return {...state, newPostText: action.postText}
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextActionCreator = (text: string) =>
  ({type: 'UPDATE-NEW-POST-TEXT', postText: text}) as const
export default profileReducer