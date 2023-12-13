import logo from './logo.svg';
import './App.css';

import UserForm from './components/userForm/UserForm'
import { useState } from 'react';
import UserList from './components/userList/UserList';
import Test from './components/Test';
import Login from './components/registration/Login';
function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
