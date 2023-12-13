
import axios from 'axios'
import React, { useState } from 'react'

function Login() {
    const [ error, setError ] = useState(false)
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ user, setUser ] = useState({})
    const handleClick = (e) => {
        e.preventDefault()
        setLoading(true)
        try {
        
            setTimeout(async () => {
                // const request = await fetch('https://jsonplaceholder.typicode.com/users/1')
                // const data = await request.json()
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1')
                setUser(data)
                setLoading(false)
            }, 800)
            

        } catch(err) {
            console.log(err)
            setError(true) 
        }
    }
  return (
    <div>
        <div>{user?.name}</div>
        <form action="">
            <input type="text" name='name' value={username} placeholder='username' onChange={e => setUsername(e.target.value)} />
            <input type="password" value={password} placeholder='password' onChange={e => setPassword(e.target.value)} />
            <button onClick={e => handleClick(e)} disabled={!username || !password}>
                {loading ? 'Loading' : 'Log in'}
            </button>
            <span data-testid='error' style={{ visibility: error ? 'visible' : 'hidden'}}>Something went wrong</span>
        </form>
    </div>
  )  
}

export default Login