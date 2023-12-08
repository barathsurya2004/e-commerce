import { useState } from 'react';
import './sign-in.style.scss'
const Signin = () => {

    const [forminput, setForminput] = useState({
        email: '',
        password: '',
    })
    console.log(forminput)


    return (
        <div className='sign-in-div'>
            <h1>Already have an acoount?</h1>
            <h2>Sign in with your email and password</h2>
            <form onSubmit={(event) => {
                const target = event.target.elements
                event.preventDefault();
                setForminput(() => {
                    return {
                        email: target.email.value,
                        password: target.password.value
                    }
                })
            }} className='sign-in-form'>
                <label >Email</label>
                <input type="email" name='email' placeholder='Email' className='input' />
                <label >Password</label>
                <input type="password" name='password' placeholder='Password' className='input' />
                <input type="submit" className='signin-submit butt' />
            </form>
        </div>
    )
}

export default Signin;