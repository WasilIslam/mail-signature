import { useState } from 'react';
import { auth,provider } from '../functions/firebase';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth';
import { useRouter } from 'next/router';


export default function index() {
  const [error, setError] = useState(null);
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
          signInWithPopup(auth, provider).then( async(result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user
        router.push('/mail_signature')
        
        console.log('User signed in:', user);
          });
    }catch(error){
      setError(error);
    }}

    const signOutWithGoogle = async () => {
      try {
        await auth.signOut();
        console.log("success")
      } catch (error) {
        setError('Error signing out:', error.message);
      }
    };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <button onClick={signOutWithGoogle}>Sign Out with Google</button>
      {error && <p>{error}</p>}
    </div>
  );
}
