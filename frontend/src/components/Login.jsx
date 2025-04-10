import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null); // It will create refernece of the email
  const password = useRef(null); // It will create reference of the password

  const handleButtonClick = () => {
    //Validate the form data
    //Either we can use state variables to get the email and password
    //Otherwise we can use refernce of the input boxes thats why we use { useRef } hook

    // console.log(email);
    // console.log(password);

    const message = checkValidData(email.current.value, password.current.value);
    //console.log(message);
    setErrorMessage(message);

    if (message) return; // If error messsage happen return donot proceed.

    // Sign In Sign Up Logic
    if (!isSignInForm) {
      //Sign Up Logic

      createUserWithEmailAndPassword(
        auth,

        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "name.current.value",
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse"); Donot need it here we shift that to header
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          //console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log("errorCode is :-", errorCode);
          console.log("errorMessage is :-", errorMessage);
          //setErrorMessage(errorCode);
        });
    } else {
      // Sign In Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // navigate("/browse"); Don't need it here as the logic of redirecting according to the auth status is present inside header
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log("errorCode is :-", errorCode);
          console.log("errorMessage is :-", errorMessage);
          //setErrorMessage(errorCode + "-" + errorMessage);

          if (errorCode === "auth/invalid-credential") {
            const ErrMsg = "Sign Up Before Sign In";
            setErrorMessage(ErrMsg);
          }
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    console.log(isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="/image/netflix_login_bg.jpg" alt="netflix-bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-opacity-80 absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email} // This email inside { } here is the reference to this particular input box
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        {!isSignInForm && (
          <input
            type="number"
            placeholder="Phone"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6  bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
