// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import app from "../firebase/firebase.config";

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProviders = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const googleProvider = new GoogleAuthProvider();

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//     };

//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//     };

//     useEffect( ()=> {
//         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
//             setUser(currentUser);
//             //console.log('current user in auth provider: ', currentUser);
//             setLoading(false);
//         });
//         return () =>{
//             return unsubscribe();
//         }
//     }, [])

//     const googleSignIn = () =>{
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider)
//     }

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth)
//     }

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signIn,
//         googleSignIn,
//         logOut
//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProviders;