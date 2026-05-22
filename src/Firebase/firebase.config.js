import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFqWOgOpVD_fBFeqQXYW-EMNl5f3PH-XY",
  authDomain: "gamepit-d2aea.firebaseapp.com",
  projectId: "gamepit-d2aea",
  storageBucket: "gamepit-d2aea.appspot.com",
  messagingSenderId: "535778472018",
  appId: "1:535778472018:web:3983c42a8e6ba7df896f8b",
};

const app = initializeApp(firebaseConfig);

// IMPORTANT: auth init
export const auth = getAuth(app);
