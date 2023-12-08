import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
}
    from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFCF51IKa5v4aImZd4QyfVYyvBH7KK7hY",
    authDomain: "e-com-db-1efc7.firebaseapp.com",
    projectId: "e-com-db-1efc7",
    storageBucket: "e-com-db-1efc7.appspot.com",
    messagingSenderId: "679660969751",
    appId: "1:679660969751:web:80220c85e62f4c471a6152"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnap = await getDoc(userDocRef);
    console.log(userSnap.exists());

    if (!userSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (err) {
            console.log('there was error in creating user :', err.message);
        }


        return userDocRef;
    }
}