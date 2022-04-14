import './App.css';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/news';
import { BrowserRouter, Route, Routes }  from "react-router-dom";
import { addPost } from './redux/store';
import { updateNewPostText } from './redux/store';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
            <Routes>
               <Route path="/dialogs" 
               element={<Dialogs store={props.store}
               messages={props.state.dialogsPage.messages}/>}/>
               <Route path="/profile" 
               element={<Profile 
               profilePage={props.state.profilePage}
               dispatch={props.dispatch}
               />}/>
               <Route path="/" 
               element={<News/>}/>
            </Routes>
        </div>
      </div>
      </BrowserRouter>
    
  );
}


export default App;
