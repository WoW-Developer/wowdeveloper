"use client";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  browserLocalPersistence,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase/firebase";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const startlogin = () => {
  setPersistence(auth, browserLocalPersistence)
    .then(async () => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      try {
        const result = await signInWithPopup(auth, provider);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        alert(user.displayName);
      } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential_1 = GoogleAuthProvider.credentialFromError(error);
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const startlogout = () => {
  signOut(auth)
    .then(() => {
      <>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">Sign Out Successful</h3>
          </label>
        </label>
      </>;
    })
    .catch((error) => {
      // An error happened.
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
    <div className="max-h-full flex flex-col w-full h-full max-w-full place-content-center place-items-center justify-items-center justify-center">
      <div className="card card-compact w-full max-w-[800px] bg-base-100 border-4 shadow-md">
        <div className="card-body justify-center">
          <h1 className="card-title text-2xl text-center text-black rounded-sm whitespace-pre-line mx-auto my-auto ">
            {current?.uid
              ? "Weclome " +
                `${current.displayName}` +
                "\nYour Email is " +
                `${current.email}`
              : "Please Login to Continue"}
          </h1>
          <div className="card-actions justify-center">
            <button
              className="btn w-fit btn-primary btn-md text-white"
              onClick={(e) => {
                e.preventDefault();
                current?.uid ? startlogout() : startlogin();
              }}
            >
              {current?.uid ? "Log Out" : "LogIn"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
