import React, { useState } from 'react'

function UserForm({ onUserAdd }) {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onUserAdd({name, email})
        setName('')
    }
    
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
           
            <div>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' type="text" value={email} onChange={e => {setEmail(e.target.value)}} />
            </div>
            <button type='submit' onClick={handleSubmit}>Add User</button>
        </form>
    </div>
  )
}

export default UserForm;