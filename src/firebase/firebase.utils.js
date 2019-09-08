import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDM6K3rj6rdcisFgfUFyLKwfQwOvm5tJ9g",
    authDomain: "store-clothing-react.firebaseapp.com",
    databaseURL: "https://store-clothing-react.firebaseio.com",
    projectId: "store-clothing-react",
    storageBucket: "",
    messagingSenderId: "189509641784",
    appId: "1:189509641784:web:b04f4edbaf92429b6068cd"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const userSnap = await userRef.get();
    

    if(!userSnap.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })    
        } catch(error) {
            console.log('error creating user', error.message);
            
        }
    }
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;