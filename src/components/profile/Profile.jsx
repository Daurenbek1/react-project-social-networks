import s from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { updateNewPostText } from '../../redux/store';

const Profile = (props) => {
    return (
      <div className={s.content}>
          <ProfileInfo/>
          <MyPosts posts={props.profilePage.posts} 
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}/>
      </div>
    )
}

export default Profile