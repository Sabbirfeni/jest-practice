import logo from './logo.svg';
import './App.css';

import UserForm from './components/userForm/UserForm'
import { useState } from 'react';
import UserList from './components/userList/UserList';
import Test from './components/Test';
function App() {
  const [ users, setUsers ] = useState([]);

  const onUserAdd = user => {
    setUsers([...users, user])
  }
  return (
    <div className="App">
      <Test name={'Sabbir'}/>
    </div>
  );
}

export default App;
