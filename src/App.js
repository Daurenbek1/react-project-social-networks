import './App.css';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/news';
import { BrowserRouter, Route, Routes }  from "react-router-dom";
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
            <Routes>
               <Route path="/dialogs" 
               element={<Dialogs state={props.state.dialogsPage} 
               messages={props.state.dialogsPage.messages}/>}/>
               <Route path="/profile" 
               element={<Profile 
               profilePage={props.state.profilePage}
               addPost={props.addPost}
               updateNewPostText={updateNewPostText}/>}/>
               <Route path="/" 
               element={<News/>}/>
            </Routes>
        </div>
      </div>
      </BrowserRouter>
    
  );
}


export default App;