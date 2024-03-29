const ADD_POST  = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you', likesCount: 13},
        { id: 2, message: 'It is my first post', likesCount: 11},
        { id: 3, message: 'Blabla', likesCount: 112},
        { id: 4, message: 'Ohou', likesCount: 144}
      ],
      newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 4
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
    

}

export const addPostActionCreater = () => ({
    type: ADD_POST
})


export const updateNewPostActionCreater = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})



export default profileReducer