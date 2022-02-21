import firebase from "firebase/compat/app";
import "firebase/compat/auth";
//import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBs7K_-eQ7v01K4X2m4zQ3JFUz-ujnFQvU",
    authDomain: "crown-clothing-be58c.firebaseapp.com",
    projectId: "crown-clothing-be58c",
    storageBucket: "crown-clothing-be58c.appspot.com",
    messagingSenderId: "605872603624",
    appId: "1:605872603624:web:b64b0e6b525b12d0aea45d",
    measurementId: "G-X01YYRKL4N",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
//export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

// import { initializeApp } from "firebase/app";
// //import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// const firebaseConfig = {
//     apiKey: "AIzaSyBs7K_-eQ7v01K4X2m4zQ3JFUz-ujnFQvU",
//     authDomain: "crown-clothing-be58c.firebaseapp.com",
//     projectId: "crown-clothing-be58c",
//     storageBucket: "crown-clothing-be58c.appspot.com",
//     messagingSenderId: "605872603624",
//     appId: "1:605872603624:web:091077a1b7f7d9bbaea45d",
//     measurementId: "G-X01YYRKL4N",
// };
// //const app = initializeApp(firebaseConfig);
// // //const db = getFirestore(app);
// // const auth = getAuth(app);
// // const provider = new GoogleAuthProvider();
// // provider.setCustomParameters({ prompt: "select_account" });
// // const signInWithGoogle = () => signInWithPopup(provider);
// // export { auth, signInWithGoogle };
// // export default app;

// //export default getFirestore();
// //Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     //console.log("signInWithGoogle");
//     provider.setCustomParameters({ prompt: "select_account" });
//     signInWithPopup(auth, provider);
//     // .then((result) => {
//     //     // This gives you a Google Access Token. You can use it to access the Google API.
//     //     const credential = GoogleAuthProvider.credentialFromResult(result);
//     //     const token = credential?.accessToken;
//     //     // The signed-in user info.
//     //     const user = result.user;
//     //     console.log({ credential, token, user });
//     // })
//     // .catch((error) => {
//     //     // Handle Errors here.
//     //     const errorCode = error.code;
//     //     const errorMessage = error.message;
//     //     // The email of the user's account used.
//     //     const email = error.email;
//     //     // The AuthCredential type that was used.
//     //     const credential = GoogleAuthProvider.credentialFromError(error);
//     //     console.log({ errorCode, errorMessage, email, credential });
//     // });
// };
// export { auth };
// export default app;
