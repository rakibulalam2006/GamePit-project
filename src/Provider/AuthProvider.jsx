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

  // signin
  const signinWithEmailPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
    .finally(() => setLoading(false));
  };

  //google signin
  const signinWithGoogleFunc = () => {
     setLoading(true);
    return signInWithPopup(auth, googleProvider)
    .finally(() => setLoading(false));
  };

  // github signin
  const signinWithGithubFunc = () => {
     setLoading(true);
    return signInWithPopup(auth, githubProvider)
    .finally(() => setLoading(false));
  };

  const signOutFunc = () => {
    setLoading(true);
    return signOut(auth)
    .finally(() => setLoading(false));
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
    signOutFunc
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
