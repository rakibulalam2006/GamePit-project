import { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //  signup
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin
  const signinWithEmailPasswordFunc = (email, password) => {
    return signInWithEmailAndPassword(auth
      , email, password);
  };

  //google signin
  const signinWithGoogleFunc = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github signin
  const signinWithGithubFunc = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
