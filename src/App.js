import React from 'react';
import { Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import GetUserInfo from './components/GetUserInfo';
import BookWithFeather from './images/bookWithFeather.png';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/aboutme" component={GetUserInfo} />
    </div>
  );
}

export default App;
