import { useState } from 'react'

const LoginForm = ({ login }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        await login(username, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username: </label>
                <input
                    id='username'
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                <label>Password: </label>
                <input
                    id='password'
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button id='login-button' type="submit">
        login
            </button>
        </form>
    )
}

export default LoginForm