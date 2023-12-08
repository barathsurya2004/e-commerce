import { useState } from 'react';
import './sign-up.style.scss'
const Signup = () => {

    const [forminput, setForminput] = useState({
        email: '',
        displayName: '',
        password: '',
        reTypePassword: ''

    })
    console.log(forminput)

    return (
        <div className='sign-up-container'>
            <h1>Don't have an account?</h1>
            <h2>Sign up with your email and password</h2>
            <form onSubmit={(event) => {
                const target = event.target.elements
                event.preventDefault();
                setForminput(() => {
                    return {
                        email: target.email.value,
                        password: target.password.value,
                        displayName: target.displayName.value,
                        reTypePassword: target.reTypePassword.value
                    }
                })
            }}>
                <label >Name</label>
                <input type="text" name='displayName' placeholder='Name' className='input' />
                <label >Email</label>
                <input type="email" name='email' placeholder='Email' className='input' />
                <label >Password</label>
                <input type="password" name='password' placeholder='Type Password' className='input' />
                <label >Re-Type Password</label>
                <input type="password" name='reTypePassword' placeholder='Retype Password' className='input' />
                <input type="submit" className='signup-submit butt' />

            </form>
        </div>
    )
}

export default Signup;