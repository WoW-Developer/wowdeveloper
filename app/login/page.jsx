"use client";
import { useRouter } from 'next/navigation';
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../firebase/firebase";
import Loading from "../loading";
import { TfiReload } from "react-icons/tfi";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
  'login_hint': 'WoW'
});

const page = () => {
  const router =useRouter();
  
  const [current, setCurrent] = useState();
  const [loading, setLoading] = useState(true);
  //useEffect(() => {}, []);

  const [showpopup, setpopup] = useState(false);
  const [realerror,setRealError] = useState(null);

  const startlogin = () => {
    setLoading(true)

    setPersistence(auth, browserLocalPersistence)
      .then(async () => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        try {
          setLoading(true)
          const result = await signInWithPopup(auth, provider);
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const uid = result.user.uid;
          setLoading(false);
          setpopup(false);
          router.replace('/')
          
        } catch (error) {
          setLoading(false);

          // Handle Errors here.
          //const errorCode = error.code;
          //const errorMessage = error.message;
         // setRealError(errorMessage);
          setpopup(true);
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential_1 = GoogleAuthProvider.credentialFromError(error);
        }
      })
      .catch((error) => {
        setLoading(false);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setRealError(errorMessage);
          setpopup(true);
      });
  };
  
  const startlogout = () => {
  
    signOut(auth)
      .then(() => {
        setLoading(true);
        router.refresh();
        setLoading(false);

      })
      .catch((error) => {
        setLoading(false);
        // An error happened.
         setRealError(error.errorCode);
          setpopup(true);
      });
  };


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setCurrent(user);
        //console.log(user);
        // ...
      } else {
        setCurrent();
      }
    });
  });


  return (
    <div className="max-h-full flex flex-col w-full h-full max-w-full place-content-center place-items-center justify-items-center justify-center">
      <div className={loading ? `flex` : `hidden`}>
        <Loading />
      </div>
      <div
        style={{ display: showpopup ? "block" : "none" }}
        className="z-[30000] card card-compact text-white fixed gap-2 left-0 my-auto mx-6 rounded-2xl right-0 flex flex-col h-fit max-w-screen-sm text-center py-6 px-2 bg-black backdrop-blur-2xl"
      >
        <h1 className="text-xl text-white">Some Error Occured!</h1>
        <h1 className="text-xl text-white">{realerror}</h1>
        <button className=" mt-3 p-3 rounded-xl bg-red-600 text-white text-2xl" onClick={async e=>{e.preventDefault();
        router.refresh()
        setRealError(null)
        setpopup(false);
        }}>
          <TfiReload />
        </button>
      </div>
      <div className={loading ? `hidden` : `flex`}>
        <div className="card card-compact w-full max-w-[800px] mx-5 bg-base-100 border-4 shadow-md">
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
    </div>
  );
};



export default page;
