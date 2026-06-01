import { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  signup
  const createUser = (email, password) => {
     setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateProfileFunc = (displayName, photoURL) =>{
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    })
    
  }

  // email verification
  const sendEmailVerificationFunc = () =>{
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  }

  // signin/login 
  const signinWithEmailPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  //google signin
  const signinWithGoogleFunc = () => {
     setLoading(true);
    return signInWithPopup(auth, googleProvider)
    
  };

  // github signin
  const signinWithGithubFunc = () => {
     setLoading(true);
    return signInWithPopup(auth, githubProvider)
   
  };
  
  // logout
  const signOutFunc = () => {
    setLoading(true);
    return signOut(auth)
  
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    signinWithEmailPasswordFunc,
    signinWithGoogleFunc,
    signinWithGithubFunc,
    loading,
    setLoading,
    signOutFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
