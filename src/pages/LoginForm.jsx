import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import { LOGIN, SET_LOADING } from '../reducers/AuthReducer'

const LoginForm = () => {
    const { dispatch } = useContext(AuthContext)
    const { state } = useLocation()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        if (email === '' || password === '') {
            alert('Please fill all fields')
            return
        }

        dispatch({ type: SET_LOADING })

        setTimeout(() => {
            dispatch({ type: LOGIN, payload: { email, password }})
            navigate(state?.from ? state.from : '/')
        }, 2000)
    }

    return (
        <div>
            <h1>Login Form</h1>

            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <button onClick={onSubmit}>Login</button>
        </div>
    )
}

export default LoginForm