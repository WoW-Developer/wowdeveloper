'use client'
import React, { use, useEffect, useState } from 'react'
import {HiOutlineUserCircle} from 'react-icons/hi'
import { onAuthStateChanged } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { app } from "../firebase/firebase";
import { useRouter } from 'next/navigation';

const auth = getAuth(app);
const loginface = () => {
    const router = useRouter();
    const[xuser, setxUser] = useState()
    const[photo, setPhoto] = useState()

    const[dis,setDis] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setxUser(user);
            setPhoto(user.photoURL)
            //console.log(user);
            // ...
          } else {
            setxUser(null);
          }
        });
      });
    
      useEffect(() => {
        setDis(true)
      }, [])
      

  return (
    <div style={{backgroundImage:xuser?`url(${photo})`:<HiOutlineUserCircle/>,display:dis?'block':'none'}} className='btn btn-xs align-middle bg-black~ btn-circle' onClick={router.push('/login')}>
    </div>
  )
}

export default loginface