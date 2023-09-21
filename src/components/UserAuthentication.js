import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate} from 'react-router-dom';
import './UserAuthentication.css';

function UserAuthentication() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate.push('/usergallerypage')
        } catch {
            setError('Failed to log in')
        }

        setLoading(false)
    }
    return (
        <div className='main'>
            <div className='welcome-div'>
                <p className='welcome-1'>Welcome back! <br></br><span>We missed you. Sign in to resume the fun</span></p>
            </div>
            {error && {error}}
            <div className='form-div'>
                <form onSubmit={handleSubmit}>
                    <p className='welcome-2'>Welcome back!</p>
                    <p>Sign in</p>
                    <input 
                        type='email' 
                        placeholder='email' 
                        ref={emailRef} 
                        required 
                    />
                    <input
                        type='password'
                        placeholder='password'
                        ref={passwordRef}
                        required
                    />
                    <button type='submit' disabled={loading}>sign in</button>
                </form>
            </div>
        </div>
    )
}

export default UserAuthentication;