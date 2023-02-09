// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeHfw1HFzhOuyFz5cbtk6TcOeRnEj3IVg",
  authDomain: "fir-demo-c0c88.firebaseapp.com",
  projectId: "fir-demo-c0c88",
  storageBucket: "fir-demo-c0c88.appspot.com",
  messagingSenderId: "694398499532",
  appId: "1:694398499532:web:f57e56850c5c591174a069",
  measurementId: "G-P2T9QHL113",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

//--------------------------------

import { userProfileContext } from "./Context/userProfileContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Parent() {
  const { setUserProfile, isAuthDone, setAuthDone } =
    useContext(userProfileContext);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserProfile(result.user);
        setAuthDone(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Sign-In with Google
      </button>
      {isAuthDone ? navigate("/user") : undefined}
    </>
  );
}

export default Parent;
