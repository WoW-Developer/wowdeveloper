"use client";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const startlogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      alert(user.displayName);
      // console.log(result.user.displayName);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      //console.log(errorMessage);
    });
};

const page = () => {
  const [current, setCurrent] = useState();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setCurrent(user);
      //console.log(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  //console.log("find user =>" + current?.uid);
  return (
    <div className="max-h-full flex flex-row w-full h-full max-w-full">
      <button
        className="text-2xl text-white rounded-sm bg-primary whitespace-pre-line mx-auto my-auto"
        onClick={startlogin}
      >
        {current?.uid
          ? "Weclome " +
            `${current.displayName}` +
            "\nYour Email is " +
            `${current.email}`
          : "Login"}
      </button>
    </div>
  );
};

export default page;
