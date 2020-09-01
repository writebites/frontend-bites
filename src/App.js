import React from 'react';
import { Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import GetUserInfo from './components/GetUserInfo';
import Profile from './components/Profile';
import WritingPromptPage from './components/WritingPromptPage';
import WritingCollection from './components/WritingCollection';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/aboutme" component={GetUserInfo} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/prompt" component={WritingPromptPage} />
      <PrivateRoute path="/collection" component={WritingCollection} />
    </div>
  );
}

export default App;
