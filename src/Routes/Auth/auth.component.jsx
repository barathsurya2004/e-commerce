import Signin from './sign-in/sign-in.component';
import Signup from './sign-up/sign-up.componenet';
import './auth.style.scss'


const Autho = () => {

    return (
        <div className='whole-container'>
            <Signin />
            <Signup />
        </div>

    )
}


export default Autho;