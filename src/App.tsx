import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs'
import Profile from './components/Profile/Profile'
import {Route} from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {StateType} from './redux/store';

type AppPropsType = {
  state: StateType,
  dispatch: (action: any) => void
}

const App: React.FC<AppPropsType> = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar state={props.state.sidebar}/>
      <div className={'app-wrapper-content'}>
        <Route path='/dialogs'
               render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
        <Route path='/profile'
               render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
      </div>
    </div>
  )
}

export default App
