import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../FireBase/firebase";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };
  const loginUser = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unsibscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user ------>", currentUser);
      setLoding(false);
    });
    return () => {
      unsibscribe();
    };
  }, []);
  const allInfo = {
    user,
    loding,
    createUser,
    loginUser,
    logOut,
    signInWithGoogle,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
