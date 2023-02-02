"use client";
import React, { useEffect, useRef} from "react"
import { AiFillDownCircle } from "react-icons/ai";

export default function scrollto() {
  const click_ref = useRef(null);

  useEffect(() => {
    
    document.getElementById('btns').style.display='block'
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register(
          // path to the service worker file
          "/sw.js"
        )
        // the registration is async and it returns a promise
        .then(function(reg) {
          //console.log("Registration Successful");
        });
    }
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
    function handleClick() {
      document.getElementById("quote").scrollIntoView();
    }
    click_ref.current = handleClick;
  }, []);

  return (
    <div>
      <div id='btns' className="text-center pt-7 hover:outline-none focus:outline-none focus:bg-transparent hover:bg-transparent text-black cursor-pointer">
        <div onClick={() => click_ref.current()}>
          {" "}
          <AiFillDownCircle className="text-center mx-auto" size={40} />
        </div>
      </div>
    </div>
  );
}
