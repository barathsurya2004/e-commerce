import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utlis/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        const userDocRef = await createUserDocumentFromAuth(response.user)
    }
    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign In with google account</button>
        </div>
    )
}


export default SignIn;