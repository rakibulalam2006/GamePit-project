import { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinWithEmailPasswordFunc = (email, password) => {
    return signInWithEmailAndPassword(auth
      , email, password);
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
