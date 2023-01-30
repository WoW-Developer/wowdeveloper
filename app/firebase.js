import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm7jmxjXBCRFkfrqdORpbaZbKzrKeoyVI",
  authDomain: "wowdeveloper-panel.firebaseapp.com",
  databaseURL:
    "https://wowdeveloper-panel-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wowdeveloper-panel",
  storageBucket: "wowdeveloper-panel.appspot.com",
  messagingSenderId: "391303416597",
  appId: "1:391303416597:web:f93dd92656c1b68931f71c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
