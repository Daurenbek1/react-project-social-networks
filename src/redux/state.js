let store = {
  _state: {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you', likesCount: 13},
            { id: 2, message: 'It is my first post', likesCount: 11},
            { id: 3, message: 'Blabla', likesCount: 112},
            { id: 4, message: 'Ohou', likesCount: 144}
          ],
          newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Даурен', itemLogo: 'https://i.pinimg.com/736x/12/ca/67/12ca67e6dcd0b0ec5d4ff56eece422ed.jpg'},
        { id: 2, name: 'Алия', itemLogo: 'https://www.pinpng.com/pngs/m/33-333616_hair-human-hair-color-purple-anime-nose-hairstyle.png'},
        { id: 3, name: 'Берик', itemLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUPMU5vcxYkSQfReiw-VytbFxrD1wA3zg6f2i5uO1eOjd4J-z2haHBDkUjRQ3YLpNg7M&usqp=CAU'},
        { id: 4, name: 'Жанель',itemLogo: 'https://www.pngitem.com/pimgs/m/506-5061193_anime-head-png-anime-head-transparent-png-download.png'},
        { id: 5, name: 'Абзал', itemLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrXioYLw5gr0ZTR4-vnu8PDgl4J41ll6LopjTmIX8vN3MNB1ZApvQ4BJ83AMCC-jPsk8&usqp=CAU'},
        { id: 6, name: 'Алибек', itemLogo: 'https://www.pngfind.com/pngs/m/87-879485_luffy-one-piece-luffy-hd-png-download.png'}
      ],
      messages: [
        { id: 1, message: 'Привет'},
        { id: 2, message: 'Добро пожаловать в Казахстан'},
        { id: 3, message: 'Как ты?'},
        { id: 4, message: 'Отлично'},
        { id: 5, message: 'Хорошо'},
        { id: 6, message: 'Привет мир'}
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) { // { type: 'ADD-POST' }
    if(action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 4
      };
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;

window.store = store;

// store - OOP