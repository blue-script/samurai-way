import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {AppRootStateType, StoreType} from '../../redux/redux-store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
  store: StoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
};

export default Profile;