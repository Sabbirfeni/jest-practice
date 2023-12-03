import logo from './logo.svg';
import './App.css';

import UserForm from './components/userForm/UserForm'
import { useState } from 'react';
import UserList from './components/userList/UserList';
function App() {
  const [ users, setUsers ] = useState([]);

  const onUserAdd = user => {
    setUsers([...users, user])
  }
  return (
    <div className="App">
      <UserForm onUserAdd={onUserAdd}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
