import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD61g4CfwZhX_iJILJ6tE7W1CSwtm49vz0",
    authDomain: "crwn-ecommerce-a9234.firebaseapp.com",
    projectId: "crwn-ecommerce-a9234",
    storageBucket: "crwn-ecommerce-a9234.appspot.com",
    messagingSenderId: "573494973739",
    appId: "1:573494973739:web:0ae4018eaff8a5a3aee16e",
    measurementId: "G-6DTZ0NXPSL"
};

firebase.initializeApp(config);


export const createUserProfileDocument = async(userauth,additionaldata) =>{
  if(!userauth) return
  
  const userref =firestore.doc(`users/${userauth.uid}`)
  const sanpShot  = await  userref.get();
 
  if(!sanpShot.exists){
    const{name,email} = userauth
    const createdAt  = new Date()


    try {
      await userref.set({
        name,
        createdAt,
        email,
        ...additionaldata

      })
      
    } catch (error) {
      console.log(error)
      
    }

    
  }
  return userref


}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
